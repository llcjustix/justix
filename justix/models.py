from django.db import models


# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    link = models.CharField(max_length=255, verbose_name='Ссылка', unique=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['id']


class Main(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    class_id = models.CharField(max_length=255, verbose_name='ID', blank=True, null=True)
    class_class = models.CharField(max_length=255, verbose_name='Class', blank=True, null=True)
    text = models.TextField(verbose_name='Текст', unique=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['id']


class Team(models.Model):
    full_name = models.CharField(max_length=100, verbose_name='Фамилия и имя')
    image = models.ImageField(upload_to='media', blank=True, verbose_name='Фото')
    position = models.CharField(max_length=100, verbose_name='Должность', blank=True)
    twitter = models.CharField(max_length=255, verbose_name='Твиттер', blank=True)
    facebook = models.CharField(max_length=255, verbose_name='Фейзбук', blank=True)
    instagram = models.CharField(max_length=255, verbose_name='Инстаграм', blank=True)
    linkedin = models.CharField(max_length=255, verbose_name='Линкедин', blank=True)

    def __str__(self):
        return self.full_name

    class Meta:
        ordering = ['id']


class Services(models.Model):
    logo = models.CharField(max_length=100, verbose_name='Logo')
    title = models.CharField(max_length=100, verbose_name='Title', blank=True)
    service_text = models.TextField(verbose_name='Text', blank=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['id']


class Prices(models.Model):
    stack = models.CharField(max_length=255, verbose_name='Stack')
    price = models.CharField(max_length=255, verbose_name='Price', blank=True)
    skills = models.TextField(verbose_name='Skills', blank=True)

    def __str__(self):
        return self.stack

    class Meta:
        ordering = ['id']
