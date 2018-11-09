# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-11-08 06:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hobbies', '0002_ingredient_recipe_recipeingredientref'),
    ]

    operations = [
        migrations.CreateModel(
            name='SubIngredient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('parent_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='parent_id', to='hobbies.Ingredient')),
                ('sub_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub_id', to='hobbies.Ingredient')),
            ],
        ),
    ]
