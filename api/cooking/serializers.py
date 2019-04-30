
from rest_framework import serializers

from .models import Recipe
from .models import Ingredient
from .models import SubIngredients
from .models import RecipeIngredients
from .models import Procedure

class RecipeSerializer(serializers.ModelSerializer):
    food_category_name = serializers.CharField(source="food_category.name", read_only=True)
    class Meta:
        model = Recipe
        fields = (
            'id',
            'name',
            'food_category',
            'food_category_name',
            'duration_from',
            'duration_to',
            'date_created',
            'date_modified'
            )
        read_only_fields = ('id', 'date_created', 'date_modified')

