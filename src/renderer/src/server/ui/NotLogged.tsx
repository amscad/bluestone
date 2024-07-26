import {observer} from 'mobx-react-lite'
import {Button} from 'antd'
import {configStore} from '../../store/config'

export const NotLogged = observer((props: {
  onOpen: () => void
}) => {
  return (
    <>
      <div className={'text-center text-[13px] mt-3 text-gray-500'}>
        {configStore.zh ? (
          <span>
            可以通过部署自己的发布程序来将Markdown文档在线化，请查看
            <a
              href={'https://pb.inkdown.me/inkdown/doc/introduction#deployment-publish-program'}
              target={'_blank'}
              className={'link px-0.5 underline hover:underline'}
            >
              详情
            </a>。
          </span>
        ) : (
          <span>
            You can put Markdown documents online by deploying your own publishing program. please
            see{' '}
            <a
              href={'https://pb.inkdown.me/inkdown/doc/introduction#deployment-publish-program'}
              target={'_blank'}
              className={'link px-0.5 underline hover:underline'}
            >
              details
            </a>
            .
          </span>
        )}
      </div>
      <Button block={true} className={'mt-4'} onClick={props.onOpen}>
        Set service parameters
      </Button>
    </>
  )
})
