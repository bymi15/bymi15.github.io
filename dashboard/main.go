package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/bymi15/bymi15.github.io/db"
	"github.com/bymi15/bymi15.github.io/db/models"
	"github.com/joho/godotenv"
)

type PageData struct {
	Experiences []models.Experience
	Projects    []models.Project
}

var client db.MongoDbClient

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Print("Failed to load .env file")
	}
	client = db.InitMongoClient()

	http.HandleFunc("/", handleTemplate)
	http.HandleFunc("/delete/experience/", handleDeleteExperience)
	http.HandleFunc("/delete/project/", handleDeleteProject)

	log.Println("Listening on port 3000...")
	err = http.ListenAndServe(":3000", nil)
	if err != nil {
		log.Fatalln(err)
	}
}

func loadPageData() PageData {
	start := time.Now()
	experiences, err := client.ExperienceService.GetExperiences()
	if err != nil {
		log.Fatal(err)
	}
	projects, err := client.ProjectService.GetProjects()
	if err != nil {
		log.Fatal(err)
	}
	data := PageData{
		Experiences: experiences,
		Projects:    projects,
	}
	elapsed := time.Since(start)
	log.Printf("Time elapsed to fetch data from MongoDB: %s", elapsed)
	return data
}

func handleTemplate(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		if err := r.ParseForm(); err != nil {
			fmt.Fprintf(w, "ParseForm() err: %v", err)
			return
		}
		editId := r.FormValue("editId")
		switch dataType := r.FormValue("type"); dataType {
		case "experience":
			experience := models.NewExperience()
			experience.JobTitle = r.FormValue("jobTitle")
			experience.Company = r.FormValue("company")
			experience.Desc = r.FormValue("desc")
			experience.Url = r.FormValue("url")
			experience.Location = r.FormValue("location")
			if r.FormValue("date") != "" {
				experience.Date = r.FormValue("date")
			}
			var err error
			if editId != "" {
				err = client.ExperienceService.UpdateExperience(editId, experience)
			} else {
				err = client.ExperienceService.CreateExperience(experience)
			}
			if err != nil {
				fmt.Fprintf(w, "Create / Update experience err: %v", err)
				return
			}
		case "projects":
			count := 1
			if i, err := strconv.Atoi(r.FormValue("count")); err == nil {
				count = i
			}
			thumbnailImage := models.ThumbnailImage{
				NamePrefix: r.FormValue("namePrefix"),
				Extension:  r.FormValue("extension"),
				Count:      count,
			}

			tags := strings.Split(r.FormValue("tags"), ",")

			project := models.NewProject()
			project.Title = r.FormValue("title")
			project.Img = thumbnailImage
			project.Tags = tags
			project.Url = r.FormValue("url")
			project.Desc = r.FormValue("desc")
			if r.FormValue("date") != "" {
				project.Date = r.FormValue("date")
			}

			var err error
			if editId != "" {
				err = client.ProjectService.UpdateProject(editId, project)
			} else {
				err = client.ProjectService.CreateProject(project)
			}
			if err != nil {
				fmt.Fprintf(w, "Create / Update project err: %v", err)
				return
			}
		}
	}
	data := loadPageData()
	t := template.Must(template.ParseGlob("templates/*.gohtml"))
	err := t.ExecuteTemplate(w, "layout", data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func handleDeleteExperience(w http.ResponseWriter, r *http.Request) {
	id := strings.TrimPrefix(r.URL.Path, "/delete/experience/")
	log.Printf("Deleting Experience id: %s", id)
	err := client.ExperienceService.DeleteExperience(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	http.Redirect(w, r, "/", http.StatusSeeOther)
}

func handleDeleteProject(w http.ResponseWriter, r *http.Request) {
	id := strings.TrimPrefix(r.URL.Path, "/delete/project/")
	log.Printf("Deleting Project id: %s", id)
	err := client.ProjectService.DeleteProject(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	http.Redirect(w, r, "/#projects", http.StatusSeeOther)
}
