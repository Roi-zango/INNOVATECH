from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ContactSerializer  
from django.core.mail import send_mail
from django.conf import settings
@api_view(['POST'])
def contact_create(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        instance = serializer.save()

        print("EMAIL TRIGGER STARTED")

        send_mail(
            subject=f"New Contact Message - {instance.name}",
            message=f"""
You received a new message from INNOVATECH website:

Name: {instance.name}
Email: {instance.email}
Project Type: {instance.project_type}

Message:
{instance.message}
""",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        return Response({"message": "Message sent successfully!"})

    return Response(serializer.errors, status=400)