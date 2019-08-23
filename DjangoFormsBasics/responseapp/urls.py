from django.urls import path
from django.contrib import admin


from responseapp import views as responseapp_views

urlpatterns = [

 path('response/', responseapp_views.create),
 path('response/thankyou/', responseapp_views.showData),

# path('', admin.site.urls),
]
