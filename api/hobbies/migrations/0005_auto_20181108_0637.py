# -*- coding: utf-8 -*-
# Generated by Django 1.11.16 on 2018-11-08 06:37
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hobbies', '0004_auto_20181108_0637'),
    ]

    operations = [
        migrations.RenameField(
            model_name='subingredient',
            old_name='parent',
            new_name='parent_ingredient',
        ),
        migrations.RenameField(
            model_name='subingredient',
            old_name='sub',
            new_name='sub_ingredient',
        ),
    ]
