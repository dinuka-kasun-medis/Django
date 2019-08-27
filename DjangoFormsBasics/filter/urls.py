from django.urls import path
from django.contrib import admin


from filter import views

urlpatterns = [
    path('', views.save_employee_detrails),
    path('data/', views.add_employee_data),
    path('data/preview/', views.showData),
    path('filter-data/', views.filter_by_lastname),
]
