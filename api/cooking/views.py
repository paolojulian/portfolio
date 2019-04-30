# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import get_object_or_404, get_list_or_404

from .serializers import RecipeSerializer

from .models import Recipe
from .models import Ingredient
from .models import SubIngredients
from .models import RecipeIngredients
from .models import Procedure

# Create your views here.
class AddRecipe(generics.ListCreateAPIView):
    queryset = Recipe.queryset.all()
    serializer_class = RecipeSerializer

    def perform_create:
        serializer.save()

