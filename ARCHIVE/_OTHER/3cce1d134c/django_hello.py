# -*- coding: utf-8 -*-

# Settings
from django.conf import settings


settings.configure(
    DEBUG=True,
    SECRET_KEY='secretfoobar',
    ROOT_URLCONF=__name__,
    MIDDLEWARE_CLASSES=(
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    )
)


# Views
from django.http import HttpResponse
from django.conf.urls import url


def index(request):
    return HttpResponse('<h1>Hello Word</h1>')

# Routes
urlpatterns = (
    url(r'^$', index),
)


# RunServer
if __name__ == '__main__':
    from django.core.management import execute_from_command_line
    import sys

    execute_from_command_line(sys.argv)
