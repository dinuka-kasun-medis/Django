from django.conf.urls import include, url
from .import views

app_name = "table1"

urlpatterns = [
    url('', views.funtion)
]