package services

import (
	"context"
	"time"

	"github.com/bymi15/bymi15.github.io/db/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type ExperienceService struct {
	Collection *mongo.Collection
}

func NewExperienceService(db *mongo.Database, collectionName string) ExperienceService {
	return ExperienceService{
		Collection: db.Collection(collectionName),
	}

}

func (service ExperienceService) GetExperiences() ([]models.Experience, error) {
	Experiences := []models.Experience{}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := service.Collection.Find(ctx, bson.D{})
	if err != nil {
		defer cursor.Close(ctx)
		return Experiences, err
	}

	for cursor.Next(ctx) {
		Experience := models.NewExperience()
		err := cursor.Decode(&Experience)
		if err != nil {
			return Experiences, err
		}
		Experiences = append(Experiences, Experience)
	}

	return Experiences, nil
}

func (service ExperienceService) CreateExperience(Experience models.Experience) error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	_, err := service.Collection.InsertOne(ctx, Experience)
	if err != nil {
		return err
	}
	return nil
}

func (service ExperienceService) UpdateExperience(id string, Experience models.Experience) error {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var data bson.M
	bytes, err := bson.Marshal(Experience)
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

func (service ExperienceService) DeleteExperience(id string) error {
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
