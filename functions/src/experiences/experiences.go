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
		experiences, err := client.ExperienceService.GetExperiences()
		if err != nil {
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
		response = utils.CreateApiResponse(experiences)
	case "POST":
		experience := models.NewExperience()
		err := utils.ParseRequestBody(r, &experience)
		if err != nil {
			log.Printf("Error: %v", err)
			http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
			return
		}
		err = client.ExperienceService.CreateExperience(experience)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusCreated)
		response = utils.CreateApiResponse(experience)
	case "PUT":
		var experience models.Experience
		err := utils.ParseRequestBody(r, &experience)
		if err != nil {
			log.Printf("Error: %v", err)
			http.Error(w, http.StatusText(http.StatusBadRequest), http.StatusBadRequest)
			return
		}
		err = client.ExperienceService.UpdateExperience(id, experience)
		if err != nil {
			http.Error(w, http.StatusText(http.StatusInternalServerError), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
		response = utils.CreateApiResponse(experience)
	case "DELETE":
		err := client.ExperienceService.DeleteExperience(id)
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
	utils.ServeFunction("/api/experiences", handler)
}
