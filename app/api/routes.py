from lib2to3.pgen2 import token
from unicodedata import name
from flask import Blueprint, request, jsonify, render_template
from helpers import token_required
from models import db, User, Coffee, coffee_schema, coffees_schema

api = Blueprint('api', __name__, url_prefix='/api')


@api.route('/my_coffees', methods=['POST'])
@token_required
def create_coffee(current_user_token):
    name = request.json['name']
    country = request.json['country']
    varietal = request.json['varietal']
    roaster = request.json['roaster']
    state = request.json['state']
    flavor_notes = request.json['flavor_notes']
    user_token = current_user_token.token

    print(f'BIG TESTER: {current_user_token}')

    coffee = Coffee(name, country, varietal, roaster, state, flavor_notes, user_token = user_token)

    db.session.add(coffee)
    db.session.commit()

    response = coffee_schema.dump(coffee)
    return jsonify(response)

@api.route('/my_coffees', methods = ['GET'])
@token_required
def get_all_coffees(current_user_token):
    a_user = current_user_token.token
    coffees = Coffee.query.filter_by(user_token = a_user).all()
    response = coffees_schema.dump(coffees)
    return jsonify(response)

@api.route('/my_coffees/<id>', methods = ['GET'])
@token_required
def get_single_coffee(current_user_token, id):
    coffee = Coffee.query.get(id)
    response = coffee_schema.dump(coffee)
    return jsonify(response)

@api.route('/my_coffees/<id>', methods = ['POST', 'PUT'])
@token_required
def update_coffee(current_user_token, id):
    coffee = Coffee.query.get(id)
    coffee.name = request.json['name']
    coffee.country = request.json['country']
    coffee.varietal = request.json['varietal']
    coffee.roaster = request.json['roaster']
    coffee.state = request.json['state']
    coffee.flavor_notes = request.json['flavor_notes']
    user_token = current_user_token.token

    db.session.commit()
    response = coffee_schema.dump(coffee)
    return jsonify(response)

@api.route('/my_coffees/<id>', methods = ['DELETE'])
@token_required
def delete_coffee(current_user_token, id):
    coffee = Coffee.query.get(id)
    db.session.delete(coffee)
    db.session.commit()
    response = coffee_schema.dump(coffee)
    return jsonify(response)