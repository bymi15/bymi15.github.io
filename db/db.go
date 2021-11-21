package db

import (
	"context"
	"log"
	"os"
	"time"

	"github.com/bymi15/bymi15.github.io/db/services"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MongoDbClient struct {
	db                *mongo.Database
	ProjectService    services.ProjectService
	ExperienceService services.ExperienceService
}

func InitMongoClient() MongoDbClient {
	uri := os.Getenv("CONNECTION_URI")
	clientOptions := options.Client().ApplyURI(uri)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	db := client.Database(os.Getenv("DB_NAME"))
	return MongoDbClient{
		db:                db,
		ProjectService:    services.NewProjectService(db, "projects"),
		ExperienceService: services.NewExperienceService(db, "experiences"),
	}

}
