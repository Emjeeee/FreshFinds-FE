import { useState } from 'react'
import { Switch } from '@headlessui/react'

const ToggleSwitchA = () => {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch.Group>
            <div className="flex items-center">
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-orange' : 'bg-black'
                        } relative inline-flex h-16 w-48 items-center rounded-full transition-colors shadow-[inset_0_4px_8px_rgba(0,0,0,0.6)]`}
                >
                    <span
                        className={`${enabled ? 'translate-x-32' : 'translate-x-4'
                            } inline-block h-12 w-12 transform rounded-full bg-fruit bg-center transition-transform duration-500 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]`}
                    />
                    <Switch.Label className={`${enabled ? 'text-white text-xl duration-500' : 'mx-11 text-white text-xl duration-500'}`}>
                        {enabled ? 'Fruits' : 'Fruits'}
                    </Switch.Label>
                </Switch>
            </div>
        </Switch.Group>
    )
}

export default ToggleSwitchA