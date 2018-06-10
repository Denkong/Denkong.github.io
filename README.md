# Denkong.github.io

Список сайтов и подробное описание вы можете найти здесь.
Все сайты/игры не являются коммерческими проектами и были реализованы с целью тренировки, саморазвития и в качестве подготовки к соревнованию по "Веб-дизайну и разработке".
Большинство, из присутствующих здесь сайтов были реализованы в режиме "SpeedRun", на верстку сайтов уходило в среднем 2ч-4ч, на создание игр от 30мин до 6ч.
Поэтому код может быть не сконструирован, содержать неосмысленные комментарии.
Вы всегда можете связаться со мной:
* dimitriew11@mail.ru
* [VK](https://vk.com/denisdimitriew)

## Avto+

Сайт компании "Авто+", занимающейся продажей автомобилей. Основная задача при создании сайта - реализовать проект только при помощи HTML и CSS. Также к вашим услугам предоставлен исходник векторного логотипа.

### Реализация задач

Стояла задача:
* При клике на элемент категории, в блоке автомобилей должны отобразиться только элементы находящиеся в этой категории
* Все интерактивные действия должны происходить без обновления страницы и без помощи iframe

Выполнено с помощью:

```

HTML:
<input type="radio" name="radiobox" id="lexus" />
<label for="lexus">Lexus</label>

CSS:
#lexus:checked ~ :not(.lexus) {
    display: none;
}

```

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
