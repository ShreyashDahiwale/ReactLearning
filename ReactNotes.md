## Basics of React Components
```text
- The export default keywords specify the main component in the file.

- The markup syntax is called JSX. It is optional, but most React projects use JSX for its convenience. 
- JSX is stricter than HTML. 
- You have to close tags like <br />. Your component also can’t return multiple JSX tags.
- You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper
- JSX lets you put markup into JavaScript. 
- Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user. 
```

## JSX
```jsx
<img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />

    // In the above example, style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces. 
```


## import {Link, NavLink} from 'react-router-dom'
Link is just similar to <a> tag. The difference is just, when we use <a> tag, the complete Page get refresh/reload.
But, in React, we don't have the concept of Reload/Refresh. 