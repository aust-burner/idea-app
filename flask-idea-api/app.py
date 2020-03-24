from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")
db = SQLAlchemy(app)
ma = Marshmallow(app)
class Idea(db.Model):
  __tablename__ = "idea"
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(100), nullable=False)
  done = db.Column(db.Boolean)
  def __init__(self, title, done):
    self.title = title
    self.done = done
class IdeaSchema(ma.Schema):
  class Meta:
    fields = ("id", "title", "done")
idea_schema = IdeaSchema()
ideas_schema = IdeaSchema(many=True)
@app.route("/")
def hello():
    return "Hello, World!"
@app.route("/todo", methods=["POST"])
def add_idea():
  title = request.json["title"]
  done = request.json["done"]
  new_idea = Idea(title, done)
  db.session.add(new_idea)
  db.session.commit()
  idea = Idea.query.get(new_idea.id)
  return idea_schema.jsonify(idea)

if __name__ == "__main__":
    app.debug = True
    app.run()