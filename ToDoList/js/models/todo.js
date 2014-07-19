var app = app || {};
// basic Todo model has title, order, completed attributes
app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  // toggle completed state of the todo list
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
