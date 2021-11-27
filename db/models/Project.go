package models

import "time"

type ThumbnailImage struct {
	NamePrefix string `bson:"namePrefix,omitempty" json:"namePrefix"`
	Extension  string `bson:"extension,omitempty" json:"extension"`
	Count      int    `bson:"count,omitempty" json:"count"`
}

type Project struct {
	Id               string         `bson:"_id,omitempty" json:"id,omitempty"`
	Title            string         `bson:"title,omitempty" json:"title"`
	Img              ThumbnailImage `bson:"img,omitempty" json:"img"`
	Tags             []string       `bson:"tags,omitempty" json:"tags"`
	Url              string         `bson:"url,omitempty" json:"url"`
	Desc             string         `bson:"desc,omitempty" json:"desc"`
	Date             string         `bson:"date,omitempty" json:"date"`
	IsTeam           bool           `bson:"isTeam,omitempty" json:"isTeam"`
	IsWork           bool           `bson:"isWork,omitempty" json:"isWork"`
	CreatedTimestamp string         `bson:"createdTimestamp,omitempty" json:"createdTimestamp"`
}

// Constructor
func NewProject() Project {
	instance := Project{}
	instance.Title = ""
	instance.Img = ThumbnailImage{NamePrefix: "", Extension: "", Count: 0}
	instance.Tags = []string{}
	instance.Url = ""
	instance.Desc = ""
	instance.Date = time.Now().Format("2006-01-02")
	instance.IsTeam = false
	instance.IsWork = false
	instance.CreatedTimestamp = time.Now().Format("2006-01-02T15:04:05Z07:00")
	return instance
}
