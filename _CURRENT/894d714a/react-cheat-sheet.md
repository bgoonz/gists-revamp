React.js cheatsheet
===================

> React.Component · render() · componentDidMount() · props/state · dangerouslySetInnerHTML · React is a JavaScript library for building user interfaces. This guide targets React v15 to v16.

[React](https://reactjs.org/) is a JavaScript library for building user interfaces. This guide targets React v15 to v16.

React Cheat Sheet
=================

render
------

    render() {
      return <div />;
    }

constructor
-----------

        constructor(props) {
          super(props);
          this.state = {
            list: props.initialList
          };
        }
        
        // where props aren't used in constructor
        
        constructor() {
          super();
          this.state = {
            list: []
          };
        }

componentWillMount
------------------

        componentWillMount() {
          // invoked once.
          // fires before initial 'render'
        }

componentDidMount
-----------------

        componentDidMount() {
          // good for AJAX: fetch, ajax, or subscriptions.
        
          // invoked once (client-side only).
          // fires before initial 'render'
        }

componentWillReceiveProps
-------------------------

        componentWillReceiveProps(nextProps) {
          // invoked every time component recieves new props.
          // does not before initial 'render'
        }

shouldComponentUpdate
---------------------

        shouldComponentUpdate(nextProps, nextState) {
          // invoked before every update (new props or state).
          // does not fire before initial 'render'.
        }

componentWillUpdate
-------------------

        componentWillUpdate(nextProps, nextState) {
          // invoked immediately before update (new props or state).
          // does not fire before initial 'render'.
        
          // (see componentWillReceiveProps if you need to call setState)
        }

**✖ this.setState**

componentDidUpdate
------------------

        componentDidUpdate(prevProps, prevState) {
          // invoked immediately after DOM updates
          // does not fire after initial 'render'
        }

componentWillUnmount
--------------------

        componentWillUnmount() {
          // invoked immediately before a component is unmounted.
        }

setState (function)
-------------------

        // good for state transitions
        
        this.setState((prevState, props) => {
          return {count: prevState.count + props.step};
        });

setState (object)
-----------------

\`\`\`js // good for static values

    this.setState({mykey: 'my new value'});

    ```

setState (optional callback)
----------------------------

        // fires after setState
        // prefer componentDidUpdate
        
        this.setState(
          (prevState, props) => ({ count: prevState.count + props.step }),
          () => console.log(this.state.count)
        );

forceUpdate
-----------

        // forces a re-render; AVOID if possible
        
        this.forceUpdate();

displayName
-----------

\`\`\`js displayName: “MyComponent”

    ```

defaultProps
------------

        class Greeting extends React.Component {
              render() {
                return <h1>Hi {this.props.name}</h1>
              }
            }
            
            CustomButton.defaultProps = {
              name: 'guest'
            };

Children.map
------------

        React.Children.map(this.props.children, (child, i) => {
            return child;
        })

Children.forEach
----------------

        React.Children.forEach(this.props.children, (child, i) => {
          console.log(child + ' at index: ' + i);
        })

Children.count
--------------

        React.Children.count(this.props.children);

Children.only
-------------

        React.Children.only(this.props.children);

Children.toArray
----------------

        React.Children.toArray(this.props.children)

Context (example)
-----------------

        // requires 'prop-types' library
        
        import { string } from "prop-types";
        
        class Cowboy extends React.Component {
          childContextTypes: {
            salutation: string
          }
        
          getChildContext() {
            return { salutation: "Howdy" };
          }
        
          render() {
            return React.Children.only(this.props.children);
          }
        }
        
        const Greeting = (props, context) =>
          <div>{context.salutation} {props.name}.</div>
        
        Greeting.contextTypes = {
          salutation: PropTypes.string
        }
        
        // <Greeting name="Michael" />
        // => Michael.
        
        // <Cowboy><Greeting name="Michael" /></Cowboy>
        // => Howdy Michael.
        

contextTypes
------------

        // add to the context-aware component
        // requires 'prop-types' library
        
        contextTypes: {
          color: PropTypes.string
        },

childContextTypes
-----------------

        // add to the context provider
        // requires 'prop-types' library
        
        childContextTypes: {
          color: PropTypes.string
        },

getChildContext
---------------

        // add to the context provider
        
        getChildContext() {
          return {color: "purple"};
        }

[\#](#components)Components
---------------------------

### Components

        import React from 'react'
        import ReactDOM from 'react-dom'
        

        class Hello extends React.Component {
          render () {
            return <div className='message-box'>
              Hello {this.props.name}
            </div>
          }
        }
        

        const el = document.body
        ReactDOM.render(<Hello name='John' />, el)
        

Use the [React.js jsfiddle](https://jsfiddle.net/reactjs/69z2wepo/) to start hacking. (or the unofficial [jsbin](http://jsbin.com/yafixat/edit?js,output))

### Import multiple exports

        import React, {Component} from 'react'
        import ReactDOM from 'react-dom'
        

        class Hello extends Component {
          ...
        }
        

### Properties

        <Video fullscreen={true} autoplay={false} />
        

        render () {
          this.props.fullscreen
          const { fullscreen, autoplay } = this.props
          ···
        }
        

Use `this.props` to access properties passed to the component.

See: [Properties](https://reactjs.org/docs/tutorial.html#using-props)

### States

        constructor(props) {
          super(props)
          this.state = { username: undefined }
        }
        

        this.setState({ username: 'rstacruz' })
        

        render () {
          this.state.username
          const { username } = this.state
          ···
        }
        

Use states (`this.state`) to manage dynamic data.

With [Babel](https://babeljs.io/) you can use [proposal-class-fields](https://github.com/tc39/proposal-class-fields) and get rid of constructor

        class Hello extends Component {
          state = { username: undefined };
          ...
        }

See: [States](https://reactjs.org/docs/tutorial.html#reactive-state)

### Nesting

        class Info extends Component {
          render () {
            const { avatar, username } = this.props
        
            return <div>
              <UserAvatar src={avatar} />
              <UserProfile username={username} />
            </div>
          }
        }

As of React v16.2.0, fragments can be used to return multiple children without adding extra wrapping nodes to the DOM.

        import React, {
          Component,
          Fragment
        } from 'react'
        
        class Info extends Component {
          render () {
            const { avatar, username } = this.props
        
            return (
              <Fragment>
                <UserAvatar src={avatar} />
                <UserProfile username={username} />
              </Fragment>
            )
          }
        }
        

Nest components to separate concerns.

See: [Composing Components](https://reactjs.org/docs/components-and-props.html#composing-components)

### Children

        <AlertBox>
          <h1>You have pending notifications</h1>
        </AlertBox>
        

        class AlertBox extends Component {
          render () {
            return <div className='alert-box'>
              {this.props.children}
            </div>
          }
        }
        

Children are passed as the `children` property.

[\#](#defaults)Defaults
-----------------------

### Setting default props

        Hello.defaultProps = {
          color: 'blue'
        }
        

See: [defaultProps](https://reactjs.org/docs/react-component.html#defaultprops)

### Setting default state

        class Hello extends Component {
          constructor (props) {
            super(props)
            this.state = { visible: true }
          }
        }
        

Set the default state in the `constructor()`.

And without constructor using [Babel](https://babeljs.io/) with [proposal-class-fields](https://github.com/tc39/proposal-class-fields).

        class Hello extends Component {
          state = { visible: true }
        }

See: [Setting the default state](https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state)

[\#](#other-components)Other components
---------------------------------------

### Functional components

        function MyComponent ({ name }) {
          return <div className='message-box'>
            Hello {name}
          </div>
        }
        

Functional components have no state. Also, their `props` are passed as the first parameter to a function.

See: [Function and Class Components](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)

### Pure components

        import React, {PureComponent} from 'react'
        
        class MessageBox extends PureComponent {
          ···
        }
        

Performance-optimized version of `React.Component`. Doesn’t rerender if props/state hasn’t changed.

See: [Pure components](https://reactjs.org/docs/react-api.html#react.purecomponent)

### Component API

        this.forceUpdate()
        

        this.setState({ ... })
        this.setState(state => { ... })
        

        this.state
        this.props
        

These methods and properties are available for `Component` instances.

See: [Component API](https://facebook.github.io/react/docs/component-api.html)

[\#](#lifecycle)Lifecycle
-------------------------

### Mounting

<table><thead><tr class="header"><th>Method</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>constructor</code> <em>(props)</em></td><td>Before rendering <a href="https://reactjs.org/docs/react-component.html#constructor">#</a></td></tr><tr class="even"><td><code>componentWillMount()</code></td><td><em>Don’t use this</em> <a href="https://reactjs.org/docs/react-component.html#componentwillmount">#</a></td></tr><tr class="odd"><td><code>render()</code></td><td>Render <a href="https://reactjs.org/docs/react-component.html#render">#</a></td></tr><tr class="even"><td><code>componentDidMount()</code></td><td>After rendering (DOM available) <a href="https://reactjs.org/docs/react-component.html#componentdidmount">#</a></td></tr><tr class="odd"><td><code>componentWillUnmount()</code></td><td>Before DOM removal <a href="https://reactjs.org/docs/react-component.html#componentwillunmount">#</a></td></tr><tr class="even"><td><code>componentDidCatch()</code></td><td>Catch errors (16+) <a href="https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html">#</a></td></tr></tbody></table>

Set initial the state on `constructor()`. Add DOM event handlers, timers (etc) on `componentDidMount()`, then remove them on `componentWillUnmount()`.

### Updating

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Method</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>componentDidUpdate</code> <em>(prevProps, prevState, snapshot)</em></td><td>Use <code>setState()</code> here, but remember to compare props</td></tr><tr class="even"><td><code>shouldComponentUpdate</code> <em>(newProps, newState)</em></td><td>Skips <code>render()</code> if returns false</td></tr><tr class="odd"><td><code>render()</code></td><td>Render</td></tr><tr class="even"><td><code>componentDidUpdate</code> <em>(prevProps, prevState)</em></td><td>Operate on the DOM here</td></tr></tbody></table>

Called when parents change properties and `.setState()`. These are not called for initial renders.

See: [Component specs](https://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops)

[\#](#hooks-new)Hooks (New)
---------------------------

### State Hook

        import React, { useState } from 'react';
        
        function Example() {
          
          const [count, setCount] = useState(0);
        
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        

Hooks are a new addition in React 16.8.

See: [Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)

### Declaring multiple state variables

        function ExampleWithManyStates() {
          
          const [age, setAge] = useState(42);
          const [fruit, setFruit] = useState('banana');
          const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
          
        }
        

### Effect hook

        import React, { useState, useEffect } from 'react';
        
        function Example() {
          const [count, setCount] = useState(0);
        
          
          useEffect(() => {
            
            document.title = `You clicked ${count} times`;
          }, [count]);
        
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>
                Click me
              </button>
            </div>
          );
        }
        

If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

By default, React runs the effects after every render — including the first render.

### Building your own hooks

#### Define FriendStatus

        import React, { useState, useEffect } from 'react';
        
        function FriendStatus(props) {
          const [isOnline, setIsOnline] = useState(null);
        
          useEffect(() => {
            function handleStatusChange(status) {
              setIsOnline(status.isOnline);
            }
        
            ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
            return () => {
              ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
            };
          }, [props.friend.id]);
        
          if (isOnline === null) {
            return 'Loading...';
          }
          return isOnline ? 'Online' : 'Offline';
        }
        

Effects may also optionally specify how to “clean up” after them by returning a function.

#### Use FriendStatus

        function FriendStatus(props) {
          const isOnline = useFriendStatus(props.friend.id);
        
          if (isOnline === null) {
            return 'Loading...';
          }
          return isOnline ? 'Online' : 'Offline';
        }
        

See: [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

### Hooks API Reference

Also see: [Hooks FAQ](https://reactjs.org/docs/hooks-faq.html)

#### Basic Hooks

<table><thead><tr class="header"><th>Hook</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>useState</code><em>(initialState)</em></td><td> </td></tr><tr class="even"><td><code>useEffect</code><em>(() =&gt; { … })</em></td><td> </td></tr><tr class="odd"><td><code>useContext</code><em>(MyContext)</em></td><td>value returned from <code>React.createContext</code></td></tr></tbody></table>

Full details: [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)

#### Additional Hooks

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><thead><tr class="header"><th>Hook</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>useReducer</code><em>(reducer, initialArg, init)</em></td><td> </td></tr><tr class="even"><td><code>useCallback</code><em>(() =&gt; { … })</em></td><td> </td></tr><tr class="odd"><td><code>useMemo</code><em>(() =&gt; { … })</em></td><td> </td></tr><tr class="even"><td><code>useRef</code><em>(initialValue)</em></td><td> </td></tr><tr class="odd"><td><code>useImperativeHandle</code><em>(ref, () =&gt; { … })</em></td><td> </td></tr><tr class="even"><td><code>useLayoutEffect</code></td><td>identical to <code>useEffect</code>, but it fires synchronously after all DOM mutations</td></tr><tr class="odd"><td><code>useDebugValue</code><em>(value)</em></td><td>display a label for custom hooks in React DevTools</td></tr></tbody></table>

Full details: [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)

[\#](#dom-nodes)DOM nodes
-------------------------

### References

        class MyComponent extends Component {
          render () {
            return <div>
              <input ref={el => this.input = el} />
            </div>
          }
        
          componentDidMount () {
            this.input.focus()
          }
        }
        

Allows access to DOM nodes.

See: [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

### DOM Events

        class MyComponent extends Component {
          render () {
            <input type="text"
                value={this.state.value}
                onChange={event => this.onChange(event)} />
          }
        
          onChange (event) {
            this.setState({ value: event.target.value })
          }
        }
        

Pass functions to attributes like `onChange`.

See: [Events](https://reactjs.org/docs/events.html)

[\#](#other-features)Other features
-----------------------------------

### Transferring props

        <VideoPlayer src="video.mp4" />
        

        class VideoPlayer extends Component {
          render () {
            return <VideoEmbed {...this.props} />
          }
        }
        

Propagates `src="..."` down to the sub-component.

See [Transferring props](https://facebook.github.io/react/docs/transferring-props.html)

### Top-level API

        React.createClass({ ... })
        React.isValidElement(c)
        

        ReactDOM.render(<Component />, domnode, [callback])
        ReactDOM.unmountComponentAtNode(domnode)
        

        ReactDOMServer.renderToString(<Component />)
        ReactDOMServer.renderToStaticMarkup(<Component />)
        

There are more, but these are most common.

See: [React top-level API](https://reactjs.org/docs/react-api.html)

[\#](#jsx-patterns)JSX patterns
-------------------------------

### Style shorthand

        const style = { height: 10 }
        return <div style={style}></div>
        

        return <div style={{ margin: 0, padding: 0 }}></div>
        

See: [Inline styles](https://reactjs.org/tips/inline-styles.html)

### Inner HTML

        function markdownify() { return "<p>...</p>"; }
        <div dangerouslySetInnerHTML={{__html: markdownify()}} />
        

See: [Dangerously set innerHTML](https://reactjs.org/tips/dangerously-set-inner-html.html)

### Lists

        class TodoList extends Component {
          render () {
            const { items } = this.props
        
            return <ul>
              {items.map(item =>
                <TodoItem item={item} key={item.key} />)}
            </ul>
          }
        }
        

Always supply a `key` property.

### Conditionals

        <Fragment>
          {showMyComponent
            ? <MyComponent />
            : <OtherComponent />}
        </Fragment>
        

### Short-circuit evaluation

        <Fragment>
          {showPopup && <Popup />}
          ...
        </Fragment>
        

[\#](#new-features)New features
-------------------------------

### Returning multiple elements

You can return multiple elements as arrays or fragments.

#### Arrays

        render () {
          
          return [
            <li key="A">First item</li>,
            <li key="B">Second item</li>
          ]
        }
        

#### Fragments

        render () {
          
          return (
            <Fragment>
              <li>First item</li>
              <li>Second item</li>
            </Fragment>
          )
        }
        

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### Returning strings

        render() {
          return 'Look ma, no spans!';
        }
        

You can return just a string.

See: [Fragments and strings](https://reactjs.org/blog/2017/09/26/react-v16.0.html#new-render-return-types-fragments-and-strings)

### Errors

        class MyComponent extends Component {
          ···
          componentDidCatch (error, info) {
            this.setState({ error })
          }
        }
        

Catch errors via `componentDidCatch`. (React 16+)

See: [Error handling in React 16](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html)

### Portals

        render () {
          return React.createPortal(
            this.props.children,
            document.getElementById('menu')
          )
        }
        

This renders `this.props.children` into any location in the DOM.

See: [Portals](https://reactjs.org/docs/portals.html)

### Hydration

        const el = document.getElementById('app')
        ReactDOM.hydrate(<App />, el)
        

Use `ReactDOM.hydrate` instead of using `ReactDOM.render` if you’re rendering over the output of [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html).

See: [Hydrate](https://reactjs.org/docs/react-dom.html#hydrate)

[\#](#property-validation)Property validation
---------------------------------------------

### PropTypes

        import PropTypes from 'prop-types'
        

See: [Typechecking with PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

<table><thead><tr class="header"><th>Key</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>any</code></td><td>Anything</td></tr></tbody></table>

#### Basic

<table><thead><tr class="header"><th>Key</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>string</code></td><td> </td></tr><tr class="even"><td><code>number</code></td><td> </td></tr><tr class="odd"><td><code>func</code></td><td>Function</td></tr><tr class="even"><td><code>bool</code></td><td>True or false</td></tr></tbody></table>

#### Enum

<table><thead><tr class="header"><th>Key</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>oneOf</code><em>(any)</em></td><td>Enum types</td></tr><tr class="even"><td><code>oneOfType</code><em>(type array)</em></td><td>Union</td></tr></tbody></table>

#### Array

<table><thead><tr class="header"><th>Key</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>array</code></td><td> </td></tr><tr class="even"><td><code>arrayOf</code><em>(…)</em></td><td> </td></tr></tbody></table>

#### Object

<table><thead><tr class="header"><th>Key</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>object</code></td><td> </td></tr><tr class="even"><td><code>objectOf</code><em>(…)</em></td><td>Object with values of a certain type</td></tr><tr class="odd"><td><code>instanceOf</code><em>(…)</em></td><td>Instance of a class</td></tr><tr class="even"><td><code>shape</code><em>(…)</em></td><td> </td></tr></tbody></table>

#### Elements

<table><thead><tr class="header"><th>Key</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>element</code></td><td>React element</td></tr><tr class="even"><td><code>node</code></td><td>DOM node</td></tr></tbody></table>

#### Required

<table><thead><tr class="header"><th>Key</th><th>Description</th></tr></thead><tbody><tr class="odd"><td><code>(···).isRequired</code></td><td>Required</td></tr></tbody></table>

### Basic types

        MyComponent.propTypes = {
          email:      PropTypes.string,
          seats:      PropTypes.number,
          callback:   PropTypes.func,
          isClosed:   PropTypes.bool,
          any:        PropTypes.any
        }
        

### Required types

        MyCo.propTypes = {
          name:  PropTypes.string.isRequired
        }
        

### Elements

        MyCo.propTypes = {
          
          element: PropTypes.element,
        
          
          node: PropTypes.node
        }
        

### Enumerables (oneOf)

        MyCo.propTypes = {
          direction: PropTypes.oneOf([
            'left', 'right'
          ])
        }
        

### Arrays and objects

        MyCo.propTypes = {
          list: PropTypes.array,
          ages: PropTypes.arrayOf(PropTypes.number),
          user: PropTypes.object,
          user: PropTypes.objectOf(PropTypes.number),
          message: PropTypes.instanceOf(Message)
        }
        

        MyCo.propTypes = {
          user: PropTypes.shape({
            name: PropTypes.string,
            age:  PropTypes.number
          })
        }
        

Use `.array[Of]`, `.object[Of]`, `.instanceOf`, `.shape`.

### Custom validation

        MyCo.propTypes = {
          customProp: (props, key, componentName) => {
            if (!/matchme/.test(props[key])) {
              return new Error('Validation failed!')
            }
          }
        }
