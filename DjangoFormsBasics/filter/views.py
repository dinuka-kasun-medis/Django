from django.shortcuts import render, redirect
from django.template import loader
from django.http import HttpResponse
from django.db import models
from django.views import generic
from .forms import Details,Employee
from .models import FilterDetails as Detail,FilterEmployee as Employees
from django.db.models import Sum, Avg

def save_employee_detrails(request):
    if request.method == "POST":
        form = Employee(request.POST)
        print ("Is valid ",form.is_valid())
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect('data/', "1")
            # return redirect('data/', pk=post.pk)
    else:
        form = Employee()

    return render(request, 'form1.html', {'form':form})


def add_employee_data(request):
    if request.method == "POST":
        form = Details(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect('preview/', pk=post.pk)
    else:
        form = Details()

    return render(request, 'form2.html', {'form':form})

def showData(request):
    employee = Employees.objects.all().values()
    details = Detail.objects.all().select_related('id')
    total_salary = Employees.objects.aggregate(Sum('salary'))
    avg_salary = Employees.objects.aggregate(Avg('salary'))
    last_names = Employees.objects.values('l_name').distinct()
    # print(details.values())
    
    l_namess = request.GET.get('search_box', None)
    print('------------------------------------------------------------------------------------------')
    print("This is :",l_namess)
    f_names = Employees.objects.filter(l_name=l_namess)
    print("This is :",f_names.values())
    query = Employees.objects.raw('''select * from filter_employee e, filter_details d 
                                        where e.id=d.id and e.l_name='ww'; ''')
    return render(request,'view_data.html',{'employee':employee,
    'total_salary':total_salary['salary__sum'],'avg_salary':avg_salary['salary__avg'],
    'l_name':last_names,"f_names":f_names,"details":details,"query":query})

def filter_by_lastname(request):
    # if request.method == 'GET':
    #     # employee = Employees.objects.filte(l_name=l_nam)
    #     l_namess =  request.GET.get('l_name')
    #     print (l_namess)
        # f_names = Employees.objects.filter(l_name=l_namess)
    # return render(request,'view_data.html',{"f_names":f_names})
    if request.method == 'GET': # If the form is submitted

        l_namess = request.GET.get('search_box', None)
        print('------------------------------------------------------------------------------------------')
        print("This is :",l_namess)
        f_names = Employees.objects.filter(l_name=l_namess)
        print("This is :",f_names.values())
    return render(request,'filter_data.html',{"f_names":f_names})
    



# def search(request):        
#     if request.method == 'GET': # this will be GET now      
#         book_name =  request.GET.get('search') # do some research what it does       
#         try:
#             status = Add_prod.objects.filter(bookname__icontains=book_name) # filter returns a list so you might consider skip except part
#         return render(request,"view_data.html",{"books":status})
#     else:
#         return render(request,"view_data.html",{})