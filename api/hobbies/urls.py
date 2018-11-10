# hobbies/urls.py

from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import CreateHobby
from .views import DetailsHobby

from .views import RecipeView
from .views import CreateRecipe

from .views import CreateIngredient
from .views import AddIngredientToRecipe

from .views import CreateSubIngredient
from .views import CreateProcedure

urlpatterns = {
    url(r'^hobby/$', CreateHobby.as_view(), name="createHobby"),
    url(r'^hobby/(?P<pk>\d+)/$', DetailsHobby.as_view(), name="Hobby details"),

    url(r'^cooking/recipe/$', CreateRecipe.as_view(), name="createRecipe"),
    url(r'^cooking/recipe/(?P<pk>\d+)/$', RecipeView.as_view(), name="Recipe Ingredients Details"),

    url(r'^cooking/ingredient/$', CreateIngredient.as_view(), name="createIngredient"),
    url(r'^cooking/recipe-ingredients/$', AddIngredientToRecipe.as_view(), name="addIngredientToRecipe"),

    url(r'^cooking/add-sub-ingredients/$', CreateSubIngredient.as_view(), name="createIngredientToRecipe"),

    url(r'^cooking/procedures/$', CreateProcedure.as_view(), name="createProcedure")
}

urlpatterns = format_suffix_patterns(urlpatterns)