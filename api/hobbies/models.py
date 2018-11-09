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

class Recipe(models.Model):
    name = models.CharField(max_length=100, blank=False, unique=True)
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
    quantity = models.CharField(max_length=100, default='None')
    description = models.CharField(max_length=100, default='')
    order = models.PositiveIntegerField(validators=[MaxValueValidator(100)], default=1)
    date_created = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('recipe', 'ingredient', 'description')
        ordering = ['order']

class SubIngredients(models.Model):
    parent_ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='parent_id')
    sub_ingredient = models.ForeignKey(Ingredient, on_delete=models.CASCADE, related_name='sub_id')
    date_created = models.DateTimeField(auto_now_add=True)