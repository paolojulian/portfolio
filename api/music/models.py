# music/models.py

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.core.validators import MaxValueValidator

class Genre(models.Model):
    name = models.CharField(max_length=20, blank=False, unique=True, default='')

    def __str__(self):
        return "{}".format(self.name)

class Music(models.Model):
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    name = models.CharField(max_length=20, blank=False, unique=True, default='')
    audio_path = models.CharField(max_length=100, blank=False, default='')
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.name)
