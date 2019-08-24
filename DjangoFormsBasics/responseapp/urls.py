from django.urls import path
from django.contrib import admin


from responseapp import views as responseapp_views

urlpatterns = [

 path('', responseapp_views.create),
 path('data/thankyou/', responseapp_views.showData),
 path('data/', responseapp_views.createData),

# path('', admin.site.urls),
]
