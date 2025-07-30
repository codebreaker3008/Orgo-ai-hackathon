def execute_action(computer, action):
    match action.type:
        case "click":
            if getattr(action, 'button', 'left') == "right":
                computer.right_click(action.x, action.y)
            else:
                computer.left_click(action.x, action.y)

        case "double_click":
            computer.double_click(action.x, action.y)

        case "type":
            computer.type(action.text)

        case "key" | "keypress":
            keys = getattr(action, 'keys', [getattr(action, 'key', [])])
            if len(keys) > 1:
                computer.key('+'.join(keys).lower())
            else:
                for key in keys:
                    computer.key(key)

        case "scroll":
            scroll_y = getattr(action, 'scroll_y', 0)
            direction = "down" if scroll_y > 0 else "up"
            computer.scroll(direction, abs(scroll_y) // 100)

        case "wait":
            computer.wait(getattr(action, 'seconds', 2))

        case "screenshot":
            pass
