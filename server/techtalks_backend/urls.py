from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from companies.views import CompanyViewSet
from events.views import EventViewSet
from django.conf.urls.static import static
from techtalks_backend.settings import MEDIA_ROOT, MEDIA_URL
router = DefaultRouter()

router.register(r"companies", CompanyViewSet)
router.register(r"events", EventViewSet)

urlpatterns = [path("admin/", admin.site.urls), path("api/v1/", include(router.urls))] + static(MEDIA_URL, document_root=MEDIA_ROOT)
