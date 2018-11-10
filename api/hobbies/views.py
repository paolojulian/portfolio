# hobbies/views.py

# -*- coding: utf-8 -*-
import json

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, get_list_or_404

from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework import generics, status

from .serializers import HobbySerializer
from .serializers import RecipeSerializer
from .serializers import IngredientSerializer
from .serializers import RecipeWIngredientsSerializer
from .serializers import RecipeIngredientsSerializer
from .serializers import SubIngredientsSerializer
from .serializers import ProcedureSerializer

from .models import Hobby
from .models import Recipe
from .models import Ingredient
from .models import SubIngredients
from .models import RecipeIngredients
from .models import Procedure
# from django.shortcuts import render

class CreateHobby(generics.ListCreateAPIView):
    queryset = Hobby.objects.all()
    serializer_class = HobbySerializer

    def perform_create(self, serializer):
        serializer.save()

class DetailsHobby(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""

    queryset = Hobby.objects.all()
    serializer_class = HobbySerializer

class CreateRecipe(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def perform_create(self, serializer):
        serializer.save()

class RecipeView(APIView):
    def get(self, request, pk):
        ## GET INGREDIENTS AND SUB-INGREDIENTS ##
        ingredients = get_list_or_404(RecipeIngredients, recipe_id=pk)
        # gets sub_ingredients of each ingredient
        ingredients_serialized = []
        for ingredient in ingredients:
            sub_ingredient = SubIngredients.objects.filter(parent_ingredient_id=ingredient.ingredient_id)
            the_sub_ingredient = {}
            the_sub_ingredient['sub_ingredients'] = SubIngredientsSerializer(sub_ingredient, many=True).data
            the_sub_ingredient['parent'] = RecipeIngredientsSerializer(ingredient).data
            ingredients_serialized.append(the_sub_ingredient)
        
        ## GET PROCEDURES OF RECIPE ##
        procedures = Procedure.objects.filter(recipe_id=pk)
        procedures_serialized = ProcedureSerializer(procedures, many=True).data

        recipe = {}
        recipe['ingredients'] = ingredients_serialized
        recipe['procedures'] = procedures_serialized
        return Response(recipe)

    def put(self):
        pass

class CreateIngredient(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    def perform_create(self, serializer):
        serializer.save()

class AddIngredientToRecipe(generics.ListCreateAPIView):
    queryset = RecipeIngredients.objects.all()
    serializer_class = RecipeIngredientsSerializer

class CreateSubIngredient(generics.ListCreateAPIView):
    queryset = SubIngredients.objects.all()
    serializer_class = SubIngredientsSerializer

    def perform_create(self, serializer):
        serializer.save()

class CreateProcedure(generics.ListCreateAPIView):
    queryset = Procedure.objects.all()
    serializer_class = ProcedureSerializer

    def perform_create(self, serializer):
        serializer.save()
