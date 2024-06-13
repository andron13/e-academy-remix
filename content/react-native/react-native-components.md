---
draft: false
title: "Короткое введение в компоненты React Native"
subtitle: "Понимание основных компонентов React Native"
description: "React Native – популярный фреймворк для разработки мобильных приложений, ориентированный на лучшие практики
пользовательского интерфейса (UI).

В React Native существует множество встроенных компонентов, которые помогают разработчикам создавать
высокопроизводительные мобильные приложения. Ниже мы рассмотрим некоторые из них:"
date: '2024-02-09'
author: "Ирина Игнатьева"
category: React Native
level: basic
tags: [ View, Text, TextInput, ScrollView, FlatList, SectionList, ActivityIndicator, Image, ImageBackground, KeyboardAvoidingView, Modal, RefreshControl, SafeAreaView, StatusBar, Switch, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Pressable, Button, VirtualizedList, DrawerLayoutAndroid, TouchableNativeFeedback, InputAccessoryView ]
weight: 100
slug: introduction-in-all-react-native-components
---

React Native – популярный фреймворк для разработки мобильных приложений, ориентированный на лучшие практики
пользовательского интерфейса (UI).

В React Native существует множество встроенных компонентов, которые помогают разработчикам создавать
высокопроизводительные мобильные приложения. Ниже мы рассмотрим некоторые из них:

### View

**View** в React Native - это аналог `div` в HTML. Он является базовым компонентом отображения для различных
UI-конструкций и обеспечивает поддержку стилей Flexbox, стилизации и обработку касаний.

View - это контейнер, который поддерживает макет с помощью Flexbox. Все корневые элементы внутри View должны быть
компонентами React. Он может занимать весь экран или быть ограниченным определенными размерами.

Самый базовый пример использования View компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};
```

---

### Text

**Text** в React Native - это аналог `p` в HTML. Он используется для отображения текста и поддерживает стилизацию через CSS подобные стили.

Text - это компонент, который используется для отображения любого вида текстового контента. Это способы стилизации текста, поддержки интернационализации и внедрения доступности очень просты в использовании.

Самый базовый пример использования Text компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
};
```
<br>Каждый отдельный элемент текста должен быть обернут в компонент Text.

---

### TextInput

**TextInput** в React Native - это аналог `input` в HTML. Это фундаментальный компонент, который позволяет пользователю вводить текст.

TextInput поддерживает различные типы ввода текста, такие как пароль, адрес электронной почты и номер телефона, а также многострочный ввод. Он также поддерживает события, которые сообщают вам, когда происходит изменение ввода или когда ввод приходит в фокус или теряет его.

Самый базовый пример использования TextInput компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
      <TextInput placeholder="Type here..." />
    </View>
  );
};
```

Все введенные пользовательские значения доступны через события изменения.

---

### ScrollView

**ScrollView** в React Native - это аналог `div` с прокруткой в HTML. Это компонент контейнера, который может иметь несколько детей, но не содержит более одного ребенка в направлении строки или колонки, и позволяет прокрутку в случае, если контент превышает его размер.

ScrollView поддерживает как горизонтальную, так и вертикальную прокрутку, а также имеет много встроенных возможностей, таких как pull-to-refresh.

Самый базовый пример использования ScrollView компонента выглядит следующим образом:

```jsx
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Scroll me!</Text>
    </ScrollView>
  );
};
```

Следует помнить, что использование ScrollView требует некоторой осторожности, поскольку все дочерние элементы рендерятся сразу, а не лениво. Что может привести к нежелательным последствиям на производительность при большом количестве дочерних элементов.

---

### FlatList

**FlatList** в React Native - это производительный компонент, который позволяет прокрутку и отображение длинных вертикальных списков данных. Он подходит для отображения простых списков данных, таких как текстовые строки, а также списков сложных структур.

FlatList поддерживает как вертикальную, так и горизонтальную прокрутку. Ключевым преимуществом FlatList является его возможность ленивой загрузки данных, что позволяет рендерить только те элементы, которые в данный момент видимы на экране.

Самый базовый пример использования FlatList компонента выглядит следующим образом:

```jsx
import React from 'react';
import { FlatList, Text } from 'react-native';

export default function App() {
  const dataArray = ['item1', 'item2', 'item3'];
  
  return (
    <FlatList
      data={dataArray}
      renderItem={({item}) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  );
};
```

Основная идея в том, что вы передаете в FlatList свои данные и функцию отображения. Компонент FlatList заботится обо всем остальном.

---

### SectionList

**SectionList** в React Native - это особый тип списка, который используется для отображения данных, разделенных на секции. Это идеальное решение для длинных списков данных, где есть группы элементов, которые могут быть разделены на секции с заголовками.

SectionList работает аналогично FlatList, но с дополнительной возможностью вводить заголовки секций и делать операции в каждый раз, когда мы переходим к новой секции.

Самый базовый пример использования SectionList компонента выглядит следующим образом:

```jsx
import React from 'react';
import { SectionList, Text } from 'react-native';

export default function App() {
  const sectionsDataArray = [
    {title: 'Section 1', data: ['item1', 'item2']},
    {title: 'Section 2', data: ['item3', 'item4']}
  ];

  return (
    <SectionList
      sections={sectionsDataArray}
      renderItem={({item}) => <Text>{item}</Text>}
      renderSectionHeader={({section: {title}}) => (
        <Text>{title}</Text>
      )}
    />
  );
};
```

Как и FlatList, SectionList также поддерживает ленивую загрузку и отрисовывает только видимые на экране элементы.

---

### ActivityIndicator

**ActivityIndicator** в React Native - это компонент, который отображает индикатор прогресса, обычно используемый для сигнализации о загрузке данных или выполнении операции в фоновом режиме.

ActivityIndicator принимает различные свойства, позволяющие контролировать его внешний вид, включая цвет и размер. Он может быть включен или выключен с помощью свойства animating.

Самый базовый пример использования ActivityIndicator компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};
```

ActivityIndicator особенно полезен для создания отзывчивого пользовательского интерфейса, так как он позволяет пользователю знать, что происходит, когда мобильное приложение обрабатывает в фоновом режиме.

---

### Image

**Image** в React Native - это компонент, который используется для отображения различных типов изображений, включая сетевые изображения, статические ресурсы, временные локальные изображения и изображения из локального диска, например из каталога `assets` приложения.

Image поддерживает сложные сценарии работы с изображениями, такие как смещение без обрезки, поворот, и масштабирование для оптимизации производительности и пользовательского опыта.

Самый базовый пример использования Image компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, Image} from 'react-native';

export default function App() {
  return (
    <View>
      <Image
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: 200, height: 200}}
      />
    </View>
  );
};
```

Изображению можно присвоить различные свойства, включая стили, источник и события жизненного цикла изображения. Благодаря этому компоненту можно быть уверенным, что вся графика в приложении будет отображаться корректно.

---

### ImageBackground

**ImageBackground** в React Native - это компонент, который используется для отображения изображения в качестве фона для детей. В принципе, это аналогово свойству `background-image` в CSS.

ImageBackground принимает те же свойства, что и Image, и умеет автоматически адаптироваться под размер своих детей.

Самый базовый пример использования ImageBackground компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <ImageBackground 
        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        style={{width: '100%', height: '100%'}}>
        <Text>Inside</Text>
      </ImageBackground>
    </View>
  );
};
```
<br> Обратите внимание, что текстовый компонент является "ребенком" ImageBackground и будет отображаться поверх изображения. Пожалуйста, помните, что ImageBackground обрезает свои детей по своим границам по умолчанию.

---

### KeyboardAvoidingView

**KeyboardAvoidingView** в React Native - это компонент, который автоматически меняет свое поведение в зависимости от того, видима ли клавиатура, чтобы избежать ее перекрытия. Он используется для того, чтобы предотвратить перекрытие вводимого текста системной клавиатурой.

KeyboardAvoidingView принимает свойство behavior, которое определяет, как компонент будет реагировать на появление клавиатуры ('padding', 'height', 'position').

Самый базовый пример использования KeyboardAvoidingView компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
      <View>
        <TextInput placeholder="Type here..." />
      </View>
    </KeyboardAvoidingView>
  );
};
```

Компонент KeyboardAvoidingView полезен для создания отзывчивого и интуитивно понятного пользовательского интерфейса, так как он автоматически меняет свое положение или размер, чтобы предотвратить перекрытие ввода текста системной клавиатурой.

---

### Modal

**Modal** в React Native - это простой компонент для отображения контента поверх текущего экрана приложения.

Modal поддерживает различные виды анимации и прозрачности фона, а также имеет встроенные средства для управления видимостью и обработки жестов, необходимых для закрытия модального окна.

Самый базовый пример использования Modal компонента выглядит следующим образом:

```jsx
import React, { useState } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};
```

Modal проще в использовании, чем некоторые другие типы диалогов и высплывающих окон, и он поддерживает всю функциональность, которая обычно нужна для таких компонентов.

---

### RefreshControl

**RefreshControl** в React Native - это компонент, который позволяет добавить функцию pull-to-refresh к ScrollView или ListView. Пользователь может обновить список, потянув его вниз.

RefreshControl имеет несколько свойств, таких как `refreshing` и `onRefresh`, которые позволяют контролировать его состояние и реагировать на жест обновления.

Самый базовый пример использования RefreshControl компонента выглядит следующим образом:

```jsx
import React, { useState } from 'react';
import { ScrollView, RefreshControl, Text } from 'react-native';

export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    fetchData().finally(() => setRefreshing(false));
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text>Hello World!</Text>
    </ScrollView>
  );
};
```

RefreshControl делает пользовательский интерфейс более отзывчивым и динамичным, позволяя пользователям легко обновлять содержимое списка.

---

### SafeAreaView

**SafeAreaView** в React Native - это компонент, который автоматически корректирует свои дочерние элементы, чтобы они не обрезались встроенными элементами пользовательского интерфейса, такими как, к примеру, моноброви на некоторых моделях iPhone и Android устройств с выпуклыми экранами.

SafeAreaView призван обеспечивать комфортное пространство для взаимодействия пользователей, и наблюдать за тем, чтобы контент не перекрывался навигационными элементами, индикаторами жизни аккумулятора и другими системными элементами.

Самый базовый пример использования SafeAreaView компонента выглядит следующим образом:

```jsx
import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
};
```

SafeAreaView ключевой компонент для создания приложения, которое выглядит и ведет себя естественно на любых устройствах, безопасно отображая интерфейс пользователя.

---

### StatusBar

**StatusBar** в React Native - это компонент, который позволяет управлять параметрами строки состояния устройства, такими как цвет фона, стиль содержимого (светлый или темный) и видимость.

Этот компонент решает важную проблему взаимодействия с контекстом устройства, гарантируя, что ваше приложение будет выглядеть на любом устройстве как дома.

Самый базовый пример использования StatusBar компонента выглядит следующим образом:

```jsx
import React from 'react';
import { StatusBar, View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <Text>Hello World!</Text>
    </View>
  );
};
```

StatusBar делает ваше приложение более отзывчивым и адаптивным, помогая вам контролировать отображение строки состояния и адаптировать ее под общий дизайн приложения.

---

### Switch

**Switch** в React Native - это базовый компонент, который обеспечивает функциональность переключателя. Включив или выключив переключатель, пользователь может изменить состояние приложения или системы.

Switch поддерживает различные свойства для настройки его стиля и состояния, а также обрабатывает события касания, которые сообщают, когда пользователь взаимодействует с переключателем.

Самый базовый пример использования Switch компонента выглядит следующим образом:

```jsx
import React, { useState } from 'react';
import { Switch, View, Text } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text>{isEnabled ? 'Switch is ON' : 'Switch is OFF'}</Text>
    </View>
  );
};
```

Switch - это эффективный и интуитивно понятный элемент управления, который может улучшить удобство использования вашего приложения, предлагая пользователю ясную визуальную обратную связь.

---

### TouchableHighlight

**TouchableHighlight** в React Native - это компонент, который обеспечивает обратную связь при касании, ощутимо меняя цвет фона элемента, на который нажимают.

TouchableHighlight оборачивает свои детей в дополнительный View, который может принимать стили, а также поддерживает родительскую прокрутку.

Самый базовый пример использования TouchableHighlight компонента выглядит следующим образом:

```jsx
import React, { useState } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <TouchableHighlight 
        onPress={() => setCount(count + 1)}
        underlayColor="white">
        <Text>Press me!</Text>
      </TouchableHighlight>
      <Text>{'You pressed: ' + count + ' times'}</Text>
    </View>
  );
};
```

TouchableHighlight прекрасно подходит для случаев, когда необходимо подчеркнуть взаимодействие пользователя, предоставляя явный визуальный отклик.

---

### TouchableOpacity

**TouchableOpacity** в React Native - это компонент, который меняет прозрачность внутреннего представления при нажатии, что позволяет обратной связи на касание, не изменяя цвета фона.

TouchableOpacity явлется базовым компонентом для кнопок или вспомогательных представлений, таких как информация и пиктограммы.

Самый базовый пример использования TouchableOpacity компонента выглядит следующим образом:

```jsx
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <TouchableOpacity 
        onPress={() => console.log('Pressed!')}
        activeOpacity={0.7}>
        <Text>Press me!</Text>
      </TouchableOpacity>
    </View>
  );
};
```

TouchableOpacity можно использовать воздействовать на вид кнопок или других интерактивных элементов, предоставляя пользователю ощутимую обратную связь.

---

### TouchableWithoutFeedback

**TouchableWithoutFeedback** в React Native - это компонент, который может быть использован для отдельной обработки касаний без какой-либо встроенной обратной связи.

TouchableWithoutFeedback прекрасно подходит для случаев, когда вы хотите создать пользовательский элемент управления или жест и не хотите иметь дело с системной обратной связью.

Самый базовый пример использования TouchableWithoutFeedback компонента выглядит следующим образом:

```jsx
import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <TouchableWithoutFeedback 
        onPress={() => console.log('Pressed!')}>
        <View>
          <Text>Press me!</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
```

TouchableWithoutFeedback является базовым компонентом для ситуаций, когда необходимо полностью контролировать обратную связь на взаимодействия пользователя.

---

### Pressable

**Pressable** в React Native - это базовый компонент, который может обрабатывать различные виды событий нажатия. Он предоставляет наиболее полный контроль над обратной связью на касание.

Pressable предоставляет гибкость в настройке обратной связи и позволяет выполнять различные действия в зависимости от того, как пользователь взаимодействует с компонентом.

Самый базовый пример использования Pressable компонента выглядит следующим образом:

```jsx
import React from 'react';
import { Pressable, View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Pressable 
        onPress={() => console.log('Pressed!')}
        onPressIn={() => console.log('Pressed In!')} 
        onPressOut={() => console.log('Pressed Out!')}>
        <Text>Press me!</Text>
      </Pressable>
    </View>
  );
};
```

Pressable это базовый компонент, когда вам нужно создать пользовательский компонент, который будет корректно реагировать на различные сценарии касания.

---

### Button

**Button** в React Native - это базовый компонент, который предоставляет стандартную кнопку. Он отличается от других компонентов, таких как TouchableOpacity или TouchableHighlight, тем что имеет предустановленный стиль, который соответствует родной платформе, и необходимым только заголовок и функция обратного вызова.

Самый базовый пример использования Button компонента выглядит следующим образом:

```jsx
import React from 'react';
import { Button, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Button
        title="Press me"
        onPress={() => console.log('Button Pressed!')}
      />
    </View>
  );
};
```

Кнопка идеально подходит для простых использований, когда вы просто хотите иметь интерактивный элемент с определенным текстом и не нуждаетесь в дополнительной настройке его стиля.

---

### VirtualizedList

**VirtualizedList** в React Native - это производительный компонент, который используется для отрисовки больших списков и таблиц данных. Она служит основой для `FlatList` и `SectionList`, но можно использовать и самостоятельно для создания более специализированных списков и таблиц.

VirtualizedList работает путем рендеринга только тех элементов, которые в настоящее время видны на экране, а не всего списка сразу. Это значит, что даже для длинных списков, которые содержат сотни или тысячи элементов, ваше приложение все еще будет работать эффективно.

Самый базовый пример использования VirtualizedList компонента выглядит следующим образом:

```jsx
import React from 'react';
import { VirtualizedList, Text } from 'react-native';

export default function App() {
  const DATA = [];
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
  });
  
  return (
    <VirtualizedList
      data={DATA}
      initialNumToRender={4}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={item => item.key}
      getItemCount={(data) => 50} // assuming list of 50 items
      getItem={getItem}
    />
  );
};
```

Для эффективного использования VirtualizedList вам потребуется функция `getItem` для получения элемента из ваших данных по индексу, и функция `getItemCount` для определения общего количества элементов в данных.

---

### DrawerLayoutAndroid

**DrawerLayoutAndroid** в React Native - это компонент, который отображает панель навигации бокового меню, обычно используемого в комбинации с библиотекой Navigator для создания приложения с боковым меню.

DrawerLayoutAndroid предоставляет большую гибкость в настройке вида и поведения бокового меню и предоставляет встроенные жесты для перемещения панели.

Самый базовый пример использования DrawerLayoutAndroid компонента выглядит следующим образом:

```jsx
import React from 'react';
import { DrawerLayoutAndroid, View, Text, Button } from 'react-native';

export default function App() {
  const navigationView = (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Menu</Text>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={'left'}
      renderNavigationView={() => navigationView}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Main Content</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};
```

Обратите внимание, что DrawerLayoutAndroid является компонентом только для Android, то есть он не сработает на iOS. Для создания бокового меню на обоих платформах лучше использовать другие решения, такие как react-navigation.

---

### TouchableNativeFeedback

**TouchableNativeFeedback** в React Native - это компонент, который может использоваться для обратной связи на касание, используя родные функции платформы Android. Он предоставляет "рипл-эффект", когда на кнопку нажимают, или другие виды визуальных откликов, которые доступны на Android.

Базовый пример использования TouchableNativeFeedback выглядит следующим образом:

```jsx
import React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => console.log('Pressed!')}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={{ width: 150, height: 100, backgroundColor: 'blue' }}>
          <Text style={{color: 'white', margin: 30}}>Button</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
```

Обратите внимание, что TouchableNativeFeedback доступен только на платформе Android. Для обеспечения обратной связи на касание на iOS и других платформах следует использовать другие компоненты, такие как TouchableOpacity или TouchableHighlight.

---

### InputAccessoryView

**InputAccessoryView** в React Native - это компонент, который позволяет добавить гибко настраиваемые инструменты над клавиатурой для ввода текста. Этот компонент доступен только на устройствах iOS.

InputAccessoryView может помочь упростить ввод текста, добавляя инструменты, такие как кнопки, которые могут вставлять специальные символы, изменять регистр или применять форматирование.

Самый базовый пример использования InputAccessoryView компонента выглядит следующим образом:

```jsx
import React from 'react';
import { TextInput, Button, InputAccessoryView, View } from 'react-native';

export default function App() {
  return (
    <View>
      <TextInput inputAccessoryViewID="accessoryView1" />
      
      <InputAccessoryView nativeID="accessoryView1">
        <Button onPress={() => console.log('Finished typing')} title="Done" />
      </InputAccessoryView>
    </View>
  );
};
```

В этом примере, при активации TextInput, появится кнопка "Done" над клавиатурой, которая будет выводить в консоль сообщение "Finished typing" после нажатия.

---

React Native прекрасен тем, что вы можете начать с этих основных компонентов и построить вокруг них невероятно
функциональные и красивые мобильные приложения. Компоненты - это кирпичики, из которых строится ваше приложение.
Благодаря их модульности и переиспользуемости, они делают процесс разработки более легким и управляемым.

