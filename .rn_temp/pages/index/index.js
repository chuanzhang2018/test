var _dec, _class;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Button, Text } from "@tarojs/components-rn";
import { observer, inject } from "@tarojs/mobx-rn";

import indexStyleSheet from "./index_styles";

var _styleSheet = indexStyleSheet;
let Index = (_dec = inject('counterStore'), _dec(_class = observer(_class = class Index extends Component {

  static config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentWillReact() {
    console.log('componentWillRect');
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props;
    counterStore.incrementAsync();
  };

  render() {
    const { counterStore } = this.props;
    return <View style={_styleSheet["index"]}>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counterStore.counter}</Text>
      </View>;
  }
}) || _class) || _class);


export default Index;