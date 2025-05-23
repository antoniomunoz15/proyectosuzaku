# Generated by Django 5.1.6 on 2025-04-10 10:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('suzaku', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImagenCarrusel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(blank=True, max_length=100)),
                ('imagen', models.ImageField(upload_to='carrusel/')),
                ('activo', models.BooleanField(default=True)),
                ('creado', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='usuario',
            name='direccion',
        ),
    ]
