# hobbies/views.py

# -*- coding: utf-8 -*-
from django.http import HttpResponse
from rest_framework import generics
from .serializers import HobbySerializer
from .serializers import RecipeSerializer
from .serializers import IngredientSerializer
from .serializers import RecipeIngredientsSerializer
from .models import Hobby
from .models import Recipe
from .models import Ingredient
from .models import SubIngredients
from .models import RecipeIngredients
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

class CreateIngredient(generics.ListCreateAPIView):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

    def perform_create(self, serializer):
        serializer.save()

class AddIngredientToRecipe(generics.ListCreateAPIView):
    queryset = RecipeIngredients.objects.all()
    serializer_class = RecipeIngredientsSerializer

class DetailsRecipeIngredients(generics.RetrieveUpdateDestroyAPIView):
    queryset = RecipeIngredients.objects.all()
    serializer_class = RecipeIngredientsSerializer
