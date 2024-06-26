# Generated by Django 4.1.5 on 2023-01-19 20:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название')),
                ('link', models.SlugField(max_length=255, unique=True, verbose_name='Ссылка')),
            ],
            options={
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100, verbose_name='Фамилия и имя')),
                ('image', models.ImageField(blank=True, upload_to='', verbose_name='Фото')),
                ('position', models.CharField(max_length=100, verbose_name='Должность')),
                ('twitter', models.SlugField(max_length=255, verbose_name='Твиттер')),
                ('facebook', models.SlugField(max_length=255, verbose_name='Фейзбук')),
                ('instagram', models.SlugField(max_length=255, verbose_name='Инстаграм')),
                ('linkedin', models.SlugField(max_length=255, verbose_name='Линкедин')),
            ],
            options={
                'ordering': ['full_name'],
            },
        ),
    ]
