# interface/serializers.py

from rest_framework import serializers
from django.db.models import Count
from .models import Hobby
from .models import Recipe
from .models import Ingredient
from .models import SubIngredients
from .models import RecipeIngredients

class HobbySerializer(serializers.ModelSerializer):
    class Meta:
        model = Hobby
        fields = ('id', 'name', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')

### Get recipe ###
class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'name', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')

### Gets recipes with ingredients and sub ingredients ###
class RecipeWIngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ('id', 'name', 'ingredients', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name', 'date_created', 'date_modified')
        read_only_fields = ('date_created', 'date_modified')

class RecipeIngredientsSerializer(serializers.ModelSerializer):
    recipe_name = serializers.CharField(source='recipe.name', read_only=True)
    ingredient_name = serializers.CharField(source='ingredient.name', read_only=True)
    class Meta:
        model = RecipeIngredients
        fields = (
            'id',
            'date_created',
            'recipe',
            'recipe_name',
            'ingredient',
            'ingredient_name',
            'quantity',
            'description',
            'order')
        read_only_fields = ('date_created', )
