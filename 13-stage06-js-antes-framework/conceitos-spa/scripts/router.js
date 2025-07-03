export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event // se não achar o evento, ele busca o que está na janela
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href) // buscando o target do A para guardar histórico
    
        this.handle()
    }

    handle() {

        const {pathname} = window.location // trouxe a prop pathname de dentro da window.location
        const route = this.routes[pathname] || this.routes[404]
        console.log('Antes do fetch')
    
        // fetch é api do javascript
        // é uma função assícrona que quando estiver pronto (then) ele irá entregar algo, no caso um console log
        // then é uma callback
        fetch(route)
            .then((data) => data.text())
            .then(html => {
                document.querySelector('.app').innerHTML = html
            })
    
        console.log(pathname)
    }
} // Função construtora

