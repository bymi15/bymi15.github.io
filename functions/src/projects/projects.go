package main

import (
	"log"
	"net/http"

	"github.com/bymi15/bymi15.github.io/db"
	"github.com/bymi15/bymi15.github.io/db/models"
	"github.com/bymi15/bymi15.github.io/functions/src/utils"
)

func handler(w http.ResponseWriter, r *http.Request) {
	client := db.InitMongoClient()
	id := r.URL.Query().Get("id")

	utils.SetDefaultHeaders(w)
	var response []byte

	switch r.Method {
	case "GET":
		projects, err := client.ProjectService.GetProjects()
		if err != nil {
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
		response = utils.CreateApiResponse(projects)
	case "POST":
		project := models.NewProject()
		err := utils.ParseRequestBody(r, &project)
		if err != nil {
			log.Printf("Error: %v", err)
			http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
			return
		}
		err = client.ProjectService.CreateProject(project)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusCreated)
		response = utils.CreateApiResponse(project)
	case "PUT":
		var project models.Project
		err := utils.ParseRequestBody(r, &project)
		if err != nil {
			log.Printf("Error: %v", err)
			http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
			return
		}
		err = client.ProjectService.UpdateProject(id, project)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
		response = utils.CreateApiResponse(project)
	case "DELETE":
		err := client.ProjectService.DeleteProject(id)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
		response = utils.CreateApiResponse("")
	}

	w.Write(response)
}

func main() {
	utils.ServeFunction("/api/projects", handler)
}
