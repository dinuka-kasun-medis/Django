from django.shortcuts import render
from django.views.generic import CreateView
from .models import Person

# Create your views here.
class PersonCreateView(CreateView):
    model = Person
    fields = ('name', 'email', 'job_title', 'bio')
    
def funtion(request):
    return render(request, "table-form.html" )


