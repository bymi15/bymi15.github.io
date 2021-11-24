package services

import (
	"context"
	"time"

	"github.com/bymi15/bymi15.github.io/db/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type ProjectService struct {
	Collection *mongo.Collection
}

func NewProjectService(db *mongo.Database, collectionName string) ProjectService {
	return ProjectService{
		Collection: db.Collection(collectionName),
	}

}

func (service ProjectService) GetProjects() ([]models.Project, error) {
	Projects := []models.Project{}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	findOptions := options.Find()
	findOptions.SetSort(bson.D{{"createdTimestamp", -1}})
	cursor, err := service.Collection.Find(ctx, bson.D{}, findOptions)
	if err != nil {
		defer cursor.Close(ctx)
		return Projects, err
	}

	for cursor.Next(ctx) {
		Project := models.NewProject()
		err := cursor.Decode(&Project)
		if err != nil {
			return Projects, err
		}
		Projects = append(Projects, Project)
	}

	return Projects, nil
}

func (service ProjectService) CreateProject(Project models.Project) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	_, err := service.Collection.InsertOne(ctx, Project)
	if err != nil {
		return err
	}
	return nil
}

func (service ProjectService) UpdateProject(id string, Project models.Project) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var data bson.M
	bytes, err := bson.Marshal(Project)
	if err != nil {
		return err
	}
	err = bson.Unmarshal(bytes, &data)
	if err != nil {
		return err
	}
	_, err = service.Collection.UpdateOne(
		ctx,
		bson.D{{"_id", objectId}},
		bson.D{{"$set", data}},
	)
	return err
}

func (service ProjectService) DeleteProject(id string) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err = service.Collection.DeleteOne(ctx, bson.D{{"_id", objectId}})
	if err != nil {
		return err
	}
	return nil
}
