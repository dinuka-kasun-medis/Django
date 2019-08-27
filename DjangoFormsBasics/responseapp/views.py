from django.shortcuts import render, redirect
# from responseapp.forms import MyForm
from django.template import loader
from django.http import HttpResponse
from django.db import models
from django.views import generic
# Create your views here.


from .forms import MyForm,DataForm
from .models import ResponseappCustomer as Customer,ResponseappData as Data

# from .models import formtable


def create(request):
    if request.method == "POST":
        form = MyForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect('data/', pk=post.pk)
    else:
        form = MyForm()

    return render(request, 'responseform.html', {'form':form})


def createData(request):
    if request.method == "POST":
        form = DataForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect('thankyou/', pk=post.pk)
    else:
        form = DataForm()

    return render(request, 'data.html', {'form':form})

def showData(request):
    # if ('objects' not in dir(customer)):
    #     customer.objects = QuerySetManager()
    x = Customer.objects.all().values()
    data = Data.objects.all().select_related('data')
    print(data.values())
    # data =Data.objects.select_related(data_id)
    print('-------------------this is obj')
    print(repr(x))
    return render(request,'thankyou.html',{'customer':None})


# def responseform(request):
#     context=Customer.objects.all()
#     return render(request, 'thankyou.html', context)
 #if form is submitted
    #  if request.method == 'POST':
        
    #     myForm = MyForm(request.POST)

    #     if myForm.is_valid():
    #         f_name = myForm.cleaned_data['f_name']
    #         l_name = myForm.cleaned_data['l_name']
    #         age = myForm.cleaned_data['age']
    #         context=Customer.objects
            # context = {
            #     'f_name': f_name,
            #     'l_name': l_name,
            #     'age': age
            # }

            # template = loader.get_template('thankyou.html')

            #returing the template
            # return HttpResponse(template.render(context, request))
    # context=Customer.objects
    # return render(request, 'thankyou.html', context)
