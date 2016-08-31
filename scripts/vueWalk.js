new Vue ({
	el: '#foo',
	data: {
		message: 'Hello Vue.js!'
	}
})

new Vue ({
	el: '#binder',
	data: {
		binderText: 'type stuff'
	}
})

new Vue ({
	el: '#toDo',
	data: {
		toDos: [
			{ text: 'buy apples' },
			{ text: 'buy pears ' },
			{ text: 'buy onions' }
		]
	}
})

new Vue ({
	el: '#userInput',
	data : {
		message: 'this is a message'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message.split('').reverse().join('')
		}
	}
})


new Vue ({
	el: '#inputToDO',
	data: {
		newTodo: '',
		todos: [
			{ text: 'Add some todos' }
		]
	},
	methods: {
		addTodo: function() {
			var text = this.newTodo.trim()
			if (text) {
				this.todos.push( { text: text } )
				this.newTodo = ''
			}
		},
		removeTodo: function(index) {
			this.todos.splice(index, 1)
		}
	}


})

































































