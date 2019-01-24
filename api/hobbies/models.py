# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.core.validators import MaxValueValidator

# Create your models here.
class Hobby(models.Model):
    name = models.CharField(max_length=20, blank=False, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.name)

class FoodCategory(models.Model):
    # ASIAN = 1, EUROPEAN = 2, AMERICAN = 3, INDIAN = 4
    name = models.CharField(max_length=100, blank=False, unique=True)

    def __str__(self):
        return "{}".format(self.name)

class Recipe(models.Model):
    name = models.CharField(max_length=100, blank=False, unique=True)
    food_category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE)
    # FAVORITE : 0 = Not Favorite, 1 = Favorite
    favorite = models.PositiveIntegerField(blank=False, default=0)

    duration_from = models.PositiveIntegerField(blank=True, default=0)
    duration_to = models.PositiveIntegerField(blank=True, default=0)

    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.name)

class Ingredient(models.Model):
    name = models.CharField(max_length=50, blank=False, unique=True)
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.name)

class RecipeIngredients(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE)
    quantity = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=100, default='')
    order = models.PositiveIntegerField(validators=[MaxValueValidator(100)], default=1)
    date_created = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('recipe', 'ingredient', 'description')
        unique_together = ('recipe', 'order')
        ordering = ['order']

class SubIngredients(models.Model):
    parent_ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='parent_id')
    sub_ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='sub_id')
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('parent_ingredient', 'sub_ingredient')

class Procedure(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    description = models.TextField(default=' ')
    order = models.PositiveIntegerField(validators=[MaxValueValidator(100)], default=1)
    date_created = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('recipe', 'order')
        ordering = ['order']
