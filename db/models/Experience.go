package models

import "time"

type Experience struct {
	Id       string `bson:"_id,omitempty" json:"id,omitempty"`
	JobTitle string `bson:"jobTitle,omitempty" json:"jobTitle"`
	Company  string `bson:"company,omitempty" json:"company"`
	Desc     string `bson:"desc,omitempty" json:"desc"`
	Url      string `bson:"url,omitempty" json:"url"`
	Location string `bson:"location,omitempty" json:"location"`
	Date     string `bson:"date,omitempty" json:"date"`
}

// Constructor
func NewExperience() Experience {
	instance := Experience{}
	instance.JobTitle = ""
	instance.Company = ""
	instance.Desc = ""
	instance.Url = ""
	instance.Location = ""
	instance.Date = time.Now().Format("2006")
	return instance
}
