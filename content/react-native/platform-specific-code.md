---
draft: false
title: "Платформозависимый код"
subtitle: "Platform Specific Code"
description: "При создании кросс-платформенного приложения вы захотите повторно использовать как можно больше кода. Однако могут возникнуть ситуации, когда имеет смысл варьировать код, например, когда вы хотите реализовать отдельные визуальные компоненты для Android и iOS."
date: '2020-04-13'
author: "andron13"
category: React Native
level: basic
tags: [ Platform, Android, iOS  ]
weight: -100
slug: platform-specific-code
contentType: news
image: "path"
---

При создании кросс-платформенного приложения вы захотите повторно использовать как можно больше кода. Однако могут возникнуть ситуации, когда имеет смысл варьировать код, например, когда вы хотите реализовать отдельные визуальные компоненты для Android и iOS.

Некоторые компоненты могут иметь свойства, которые работают только на одной платформе. Все такие свойства аннотированы с помощью `@platform` и имеют небольшой значок рядом с ними на сайте.

### Модуль Platform

React Native предоставляет модуль, который определяет платформу, на которой работает приложение. Вы можете использовать логику определения для реализации платформозависимого кода. Используйте эту опцию, когда только небольшие части компонента являются платформозависимыми.

```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});
```
`Platform.OS` будет `ios` при работе на iOS и `android` при работе на Android.

Также доступен метод `Platform.select`, который принимает объект, где ключами могут быть одни из `'ios' | 'android' | 'native' | 'default'`, возвращает наиболее подходящее значение для текущей платформы.

```jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: { // другие платформы, например веб
        backgroundColor: 'blue',
      },
    }),
  },
});
```

Так как метод принимает любое значение, можно возвращать платформозависимые компоненты, как это показано ниже:

```jsx
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid')
})();

<Component />;
```

```jsx
const Component = Platform.select({
  native: () => require('ComponentForNative'),
  default: () => require('ComponentForWeb')
})();

<Component />;
```

### Определение версии Android

На Android модуль `Platform` также может использоваться для определения версии Android, на которой работает приложение:

```jsx
import { Platform } from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}
```

:

### Определение версии iOS

На iOS, `Version` является результатом `-[UIDevice systemVersion]`, которая является строкой с актуальной версией операционной системы. Пример системной версии - "10.3". Для определения основного номера версии на iOS:

```jsx
import { Platform } from 'react-native';

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}
```

### Расширения для разных платформ

Когда ваш платформозависимый код становится более сложным, стоит вынести код в отдельные файлы. React Native обнаружит, когда файл имеет расширение `.ios.` или `.android.` и загрузит релевантный файл в зависимости от платформы.

Также есть возможность использовать расширение `.native.js`, когда модуль должен быть разделен между NodeJS/Web и React Native, но не имеет различий для Android/iOS. Это очень полезно для проектов, которые имеют общий код, разделяемый между React Native и ReactJS.

```jsx
import Container from './Container';
```

**Совет:** Настройте веб-сборщик таким образом, чтобы он игнорировал расширения `.native.js`, чтобы избежать наличия неиспользуемого кода в вашем конечном пакете, что приведет к сокращению его размера.
