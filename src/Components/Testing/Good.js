//Example Application State
const appStore = {
  loggedInUser: "Anand",
  loading: false,
  students: {
    list: [],
  },
  teachers: {
    list: [],
  },
};

// --------------------- Helper Functions------------------------

const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

// -----------------  Action constants ---------------------------
const LOADING = "LOADING";
const LOGGED_IN_USER = "LOGGED_IN_USER";
const LOAD_STUDENTS = "LOAD_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const EDIT_STUDENT = "EDIT_STUDENT";
const EDIT_STUDENT_CLICKED = "EDIT_STUDENT_CLICKED";
const CLEAR_EDIT_STUDENT = "CLEAR_EDIT_STUDENT";
const DELETE_STUDENT = "DELETE_STUDENT";

// ---------------------------- Actions -----------------------------------
const loading = (isLoading) => ({
  type: LOADING,
  payload: {
    isLoading,
  },
});

const loggedInUser = () => (dispatch) => {
  dispatch(loading(true));
  setTimeout(() => {
    dispatch({
      type: LOGGED_IN_USER,
      payload: {
        user: "Anand",
      },
    });
    dispatch(loading(false));
  }, 3000);
};

const addStudent = (student) => (dispatch) => {
  dispatch(loading(true));
  setTimeout(() => {
    dispatch({
      type: ADD_STUDENT,
      payload: {
        student,
      },
    });
    dispatch(loading(false));
  }, 3000);
};

const editStudent = (student) => (dispatch) => {
  console.log("edit", student);
  dispatch(loading(true));
  setTimeout(() => {
    dispatch({
      type: EDIT_STUDENT,
      payload: {
        student,
      },
    });
    clearEditStudent();
    dispatch(loading(false));
  }, 3000);
};

const loadStudentList = () => (dispatch) => {
  dispatch(loading(true));
  setTimeout(() => {
    dispatch({
      type: LOAD_STUDENTS,
      payload: {
        students,
      },
    });
    dispatch(loading(false));
  });
};

const deleteStudent = (student) => (dispatch) => {
  dispatch(loading(true));
  setTimeout(() => {
    dispatch({
      type: DELETE_STUDENT,
      payload: {
        student,
      },
    });
    dispatch(loading(false));
  }, 3000);
};

const editStudentClicked = (student) => {
  return {
    type: EDIT_STUDENT_CLICKED,
    payload: {
      student,
    },
  };
};

const clearEditStudent = () => ({
  type: CLEAR_EDIT_STUDENT,
});

// ----------------------------- Reducers ------------------------------------
const loadingFn = (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload.isLoading;
    default:
      return state;
  }
};

const userFn = (state = "", action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return action.payload.user;
    default:
      return state;
  }
};
const studentsState = {
  list: [
    {
      name: "Anand",
      age: 10,
      city: "vijayawada",
    },
  ],
};
const studentsFn = (state = studentsState, action) => {
  let modifiedState;
  switch (action.type) {
    case ADD_STUDENT:
      modifiedState = deepCopy(state);
      modifiedState.list.push(action.payload.student);
      return modifiedState;
    case EDIT_STUDENT:
      modifiedState = deepCopy(state);
      const editedStudent = action.payload.student;
      for (let i = 0; i < modifiedState.list.length; i++) {
        if (modifiedState.list[i].name === editedStudent.name) {
          modifiedState.list[i] = editedStudent;
          break;
        }
      }
      console.log("asda", modifiedState);
      return modifiedState;
    case EDIT_STUDENT_CLICKED:
      modifiedState = deepCopy(state);
      modifiedState.edit = action.payload.student;
      return modifiedState;
    case LOAD_STUDENTS:
      return state;
    case DELETE_STUDENT:
      modifiedState = deepCopy(state);
      const deleteStudent = action.payload.student;
      var j;
      for (let i = 0; i < modifiedState.list.length; i++) {
        if (modifiedState.list[i].name === deleteStudent.name) {
          j = i;
          break;
        }
      }
      modifiedState.list = modifiedState.list.splice(j, 1);
      return modifiedState;
    case CLEAR_EDIT_STUDENT:
      modifiedState = deepCopy(state);
      delete modifiedState.edit;
      return modifiedState;
    default:
      return state;
  }
};

// --------------------- Combine Reducers into one entity ---------------------
const rootReducer = Redux.combineReducers({
  loading: loadingFn,
  loggedInUser: userFn,
  students: studentsFn,
});

// ---------------------- Middlewares -----------------------------------------
const thunkMiddleware = ReduxThunk.default;

const applyMiddleware = Redux.applyMiddleware(thunkMiddleware);

// --------------------- Store ------------------------------------------------
const compose = Redux.compose;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = Redux.createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware)
);

// -----------------------Components --------------------------------------

const { Router, Route, IndexRoute, Link, hashHistory } = ReactRouter;

class ContainerComponent extends React.Component {
  render() {
    return (
      <div id="main">
        <Loading />
        <Header />
        <div id="appContainer">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
        </ul>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <div className="footer">&copy;2017 Anand Rikka</div>;
  }
}

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const displayValue = this.props.loading ? "block" : "none";
    const splash = this.props.loading ? "splash-screen" : "";
    return (
      <div className={splash}>
        <div className="loadingBar" style={{ display: displayValue }}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
const loadingActions = Object.assign({}, { loading });
const mapStateToPropsForLoading = (state) => {
  const { loading } = state;
  return { loading };
};
const mapDispatchToPropsForLoading = (dispatch) => ({
  actions: Redux.bindActionCreators(loadingActions, dispatch),
});
Loading = ReactRedux.connect(
  mapStateToPropsForLoading,
  mapDispatchToPropsForLoading
)(Loading);

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.loggedInUser();
  }
  render() {
    if (this.props.loggedInUser.length > 0) {
      return <h1>Welcome {this.props.loggedInUser} !!</h1>;
    }
    return null;
  }
}
const homeActions = Object.assign({}, { loggedInUser });
const mapDispatchToPropsForHome = (dispatch) => ({
  actions: Redux.bindActionCreators(homeActions, dispatch),
});
const mapStateToPropsForHome = (state) => {
  const { loggedInUser } = state;
  return { loggedInUser };
};
HomeComponent = ReactRedux.connect(
  mapStateToPropsForHome,
  mapDispatchToPropsForHome
)(HomeComponent);

class StudentsComponent extends React.Component {
  render() {
    return (
      <div>
        <h4>Students Screen !!</h4>
        <AddOrEditStudentComponent {...this.props} />
        <StudentListComponent {...this.props} />
      </div>
    );
  }
}
const studentActions = Object.assign(
  {},
  {
    addStudent,
    editStudent,
    loadStudentList,
    deleteStudent,
    editStudentClicked,
    clearEditStudent,
  }
);
const mapDispatchToPropsForStudents = (dispatch) => ({
  actions: Redux.bindActionCreators(studentActions, dispatch),
});
const mapStateToPropsForStudents = (state) => {
  const { students } = state;
  return { students };
};
// If dispatch events are not mapped we will directly have dispatch in props
StudentsComponent = ReactRedux.connect(
  mapStateToPropsForStudents,
  mapDispatchToPropsForStudents
)(StudentsComponent);

class AddOrEditStudentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.isAdd = !this.props.students.edit;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleSubmit(e) {
    e.preventDefault();
    let student = {
      name: this.name.value,
      age: this.age.value,
      city: this.city.value,
    };
    if (!this.props.students.edit) {
      this.props.actions.addStudent(student);
    } else {
      this.props.actions.editStudent(student);
      this.props.actions.clearEditStudent();
    }
    this.name.value = "";
    this.age.value = "";
    this.city.value = "";
  }

  render() {
    if (this.props.students.edit) {
      const student = this.props.students.edit;
      console.log(student);
      this.name.value = student.name;
      this.age.value = student.age;
      this.city.value = student.city;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" ref={(input) => (this.name = input)} />
        </div>
        <div>
          <label>Age</label>
          <input type="text" ref={(input) => (this.age = input)} />
        </div>
        <div>
          <label>City</label>
          <input type="text" ref={(input) => (this.city = input)} />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    );
  }
}

class StudentListComponent extends React.Component {
  render() {
    const list = this.props.students.list;
    return (
      <div>
        <h4>Total Students</h4>
        {list.map((student, index) => {
          return (
            <p>
              {student.name}, {student.age}, {student.city}{" "}
              <button
                onClick={() => this.props.actions.editStudentClicked(student)}
              >
                e
              </button>{" "}
              <button onClick={() => this.props.actions.deleteStudent(student)}>
                d
              </button>
            </p>
          );
        })}
      </div>
    );
  }
}

class TeachersComponent extends React.Component {
  render() {
    return <h1>Teachers Component</h1>;
  }
}

//Routes
const Routes = (
  <Route path="/" component={ContainerComponent}>
    <IndexRoute component={HomeComponent} />
    <Route path="students" component={StudentsComponent} />
    <Route path="teachers" component={TeachersComponent} />
  </Route>
);

const Provider = ReactRedux.Provider;
const provider = (
  <Provider store={store}>
    <Router history={hashHistory}>{Routes}</Router>
  </Provider>
);

//React-Render
ReactDOM.render(provider, document.getElementById("app"));
