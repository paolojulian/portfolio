# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-11-09 12:19
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hobbies', '0011_auto_20181108_0752'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='recipeingredients',
            unique_together=set([('recipe', 'order')]),
        ),
    ]
