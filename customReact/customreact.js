function customRander(reactElement,container ){
/*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childreen
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.childreen
   for (const prop in reactElement.props) {
     if(prop === 'childreen') continue;

     domElement.setAttribute(prop,reactElement.props[prop])
    
   }
   container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target: '_blank'
    },
    childreen:'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRander(reactElement,mainContainer)