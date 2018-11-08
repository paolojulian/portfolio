#/interface/tests.py

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase
from .models import Hobby

from rest_framework.test import APIClient
from rest_framework import status
from django.core.urlresolvers import reverse

class ViewTestCase(TestCase):

    ## ModelTestCase
    # def setUp(self):
    #     """Define the test client and other test variables."""
    #     self.hobby_name = "Write world class code"
    #     self.hobby = Hobby(name=self.hobby_name)

    # def test_model_can_create_a_bucketlist(self):
    #     """Test the bucketlist model can create a bucketlist."""
    #     old_count = Hobby.objects.count()
    #     self.hobby.save()
    #     new_count = Hobby.objects.count()
    #     self.assertNotEqual(old_count, new_count)
    def setUp(self):
        self.client = APIClient()
        self.hobby_data = { 'name': 'Music' }
        self.response = self.client.post(
            reverse('create'),
            self.hobby_data,
            format="json")

    def test_interface_can_create_a_hobby(self):
        self.assertEqual(self.response.status_code, status.HTTP_201_CREATED)

    def test_api_can_get_a_bucketlist(self):
        """Test the api can get a given bucketlist."""
        hobby = Hobby.objects.get()
        response = self.client.get(
            reverse('details',
            kwargs={'pk': hobby.id}), format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertContains(response, Hobby)

    def test_api_can_update_bucketlist(self):
        """Test the api can update a given bucketlist."""
        change_hobby = {'name': 'Test'}
        res = self.client.put(
            reverse('details', kwargs={'pk': hobby.id}),
            change_hobby, format='json'
        )
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_api_can_delete_bucketlist(self):
        """Test the api can delete a bucketlist."""
        hobby = Hobby.objects.get()
        response = self.client.delete(
            reverse('details', kwargs={'pk': hobby.id}),
            format='json',
            follow=True)

        self.assertEquals(response.status_code, status.HTTP_204_NO_CONTENT)
