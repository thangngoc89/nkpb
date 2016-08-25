// ------------------------------------
// Constants
// ------------------------------------


// ------------------------------------
// Actions
// ------------------------------------


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  title: 'Phước Bình',
  icon: {
    display: false,
    icon: 'arrow-back',
    link: '/',
  },
  list: [
    {
      name: 'Khách hàng',
      icon: 'social:person',
    },
    {
      name: 'Plugins',
      icon: 'device:widgets',
    },
    {
      name: 'About',
      icon: 'info-outline',
    },
  ],
}

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
