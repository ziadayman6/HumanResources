from django.shortcuts import render
from django.template import loader
from .models import Employee,VacationRequest
from django.http import HttpResponse, JsonResponse
# Create your views here.

def delete_data(request,idnumber):
    if request.method == 'GET':
        try:
            item = Employee.objects.get(id=idnumber)
            item.delete()
            return render(request,'project1.html')
        except Employee.DoesNotExist:
            return render(request,'project1.html')
    else:
        return JsonResponse({'message':'Invalid request method.'})

def delete_requests(request,idnumber):
    if request.method == 'GET':
        try:
            requestt = VacationRequest.objects.get(id=idnumber)
            requestt.delete()
            return render(request,'project1.html')
        except VacationRequest.DoesNotExist:
            return render(request,'project1.html')
    else:
        return JsonResponse({'message':'Invalid request method.'})

def home(request):
    return render(request , 'project1.html')

def login(request):
    return render(request, 'login.html')

def editemp(request):
    if request.method == 'POST':
        theid = request.POST.get('idd')
        email = request.POST.get('maill')
        address = request.POST.get('addresss')
        phone = request.POST.get('phonee')
        marital_status = request.POST.get('mart')
        available_vacation_days = request.POST.get('vacc')
        approved_vacation_days = request.POST.get('app')
        salary = request.POST.get('salaryy')

        employee = Employee.objects.get(id=theid)
        employee.email = email
        employee.address = address
        employee.phone = phone
        employee.marital_status = marital_status
        employee.available_vacation_days = available_vacation_days
        employee.approved_vacation_days = approved_vacation_days
        employee.salary = salary
        employee.save()
        return render(request,'project1.html')
    
    return render(request, 'edit2.html')

def edittable(request):
    myemployees = Employee.objects.all().values()
    template = loader.get_template('editemp.html')
    context = {
        'myemployees':myemployees,
    }
    return HttpResponse(template.render(context,request))

def form(request):
    if request.method == 'POST':
        name = request.POST.get('Name')
        id_number = request.POST.get('ID')
        num_of_vac = request.POST.get('Vac_days') 
        reason = request.POST.get('Reason')
        from_day = request.POST.get('From')
        to_day = request.POST.get('To')
        email = request.POST.get('Email')

        myrequest = VacationRequest(
            name=name,
            email=email,
            id_number=id_number,
            vacation_days=num_of_vac,
            reason=reason,
            start_date=from_day,
            end_date=to_day
        )
        myrequest.save()
        return render(request,'form.html')
    
    mydataids = Employee.objects.all()
    context = {
        'mydataids' : mydataids,
    }

    return render(request, 'form.html', context)

def vacrequest(request):
    myrequests = VacationRequest.objects.all().values()
    template = loader.get_template('request.html')
    context = {
        'myrequests': myrequests,
    }
    return HttpResponse(template.render(context,request))

def addemployee(request):
    if request.method == 'POST':
        name = request.POST.get('Name')
        email = request.POST.get('Email')
        address = request.POST.get('Address')
        phone = request.POST.get('Phone')
        id_number = request.POST.get('ID')
        gender = request.POST.get('Gender', '') 
        marital_status = request.POST.get('Martial')
        date_of_birth = request.POST.get('Date')
        available_vacation_days = request.POST.get('Vac_days')
        approved_vacation_days = request.POST.get('Approved_days')
        salary = request.POST.get('Salary')

        employee = Employee(
            name=name,
            email=email,
            address=address,
            phone=phone,
            id_number=id_number,
            gender=gender,
            marital_status=marital_status,
            date_of_birth=date_of_birth,
            available_vacation_days=available_vacation_days,
            approved_vacation_days=approved_vacation_days,
            salary=salary
        )
        employee.save()
        return render(request,'add.html')
        
    mydataids = Employee.objects.all()
    context = {
        'mydataids' : mydataids,
    }

    return render(request, 'add.html', context)

