/** @format */

import React, {useState} from 'react'
import {LoadingOutlined} from '@ant-design/icons'
import Replay from './Reply'

const Comment = () => {
  const [showPanel, setshowPanel] = useState(true)
  return (
    <div id="repond">
      <h3 id="comments" className="repond_title">
        发表评论
      </h3>
      <Replay />
      <div className="comment-count">
        <span>88</span>条评论
      </div>
      <div className="comment-loading" style={{display: 'none'}}>
        <LoadingOutlined style={{fontSize: '30px'}} />
      </div>
      <div className="comment-list">
        {/* <div className="no-comment">暂无评论</div> */}
        <div className="comment-item">
          <img
            src="https://gravatar.loli.net/avatar/415ae4eeb931482bc1a0676729519e44?d=retro&v=1.4.14"
            alt=""
            className="coment-avatar"
          />
          <div className="comment-info">
            <div className="comment-name">
              <a href="/#" className="nick">
                ChongQin
              </a>
              <span className="sys">Chrome 86.0.4240.111</span>
              <span className="sys">Windows 10.0</span>
            </div>
            <div className="comment-date">
              <span className="time">2020-10-18</span>
              <span className="replay-btn">回复</span>
            </div>
            <div className="comment-content">
              <p>可以，学习下 </p>
            </div>
            <div className="replay-wrapper">回复框占位</div>
            <div className="quote">
              <div className="comment-item">
                <img
                  src="https://gravatar.loli.net/avatar/415ae4eeb931482bc1a0676729519e44?d=retro&v=1.4.14"
                  alt=""
                  className="coment-avatar sub"
                />
                <div className="comment-info">
                  <div className="comment-name">
                    <a href="/#" className="nick">
                      ChongQin
                    </a>
                    <span className="sys">Chrome 86.0.4240.111</span>
                    <span className="sys">Windows 10.0</span>
                  </div>
                  <div className="comment-date">
                    <span className="time">2020-10-18</span>
                    <span className="replay-btn">回复</span>
                  </div>
                  <div className="comment-content">
                    <p>
                      <a href="/#" className="nick">
                        @ChongQin
                      </a>
                      , 可以，学习下
                    </p>
                  </div>
                  <div className="replay-wrapper">回复框占位</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        #repond {
          max-width: 100%;
          padding: 1rem;
        }

        .comment-box {
          padding: 10px;
          margin-bottom: 10px;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
        }

        .repond_title {
          margin-top: 10px;
          font-size: 1.8em;
        }

        #commentform {
          margin: 5px 0 0 0;
        }

        #conmmentform p {
          margin: 0;
        }

        #conmmentform .commentator input {
          font-size: 12px;
          color: #555;
          box-sizing: border-box;
          width: 33%;
          border-bottom: 1px dashed #eaecef;
        }

        #conmmentform .commentator input:focus {
          border-bottom: 1px dashed #3eaf7c;
        }

        @media screen and (max-width: 520px) {
          #conmmentform .commentator input {
            width: 100%;
          }
        }

        #conmmentform input,
        #conmmentform textarea {
          padding: 8px;
          border: none;
          outline: none;
          background: transparent;
        }

        #conmmentform input {
          margin-bottom: 5px;
        }

        #conmmentform textarea {
          width: 100%;
          height: 140px;
          overflow: auto;
        }

        #conmmentform #submit {
          width: 100px;
          height: 36px;
          overflow: visible;
          background-color: #f0f3f9;
          box-shadow: 1px 1px #afc4ea, 2px 2px #afc4ea, 3px 3px #afc4ea;
        }

        .comment-count {
          font-size: 1.25em;
          font-weight: 600;
        }

        .comment-loading {
          margin: 10px 0;
          text-align: center;
        }

        .comment-item {
          display: flex;
          justify-content: flex-start;
          margin-top: 20px;
          width: 100%;
        }

        .coment-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }

        .coment-avatar.sub {
          width: 40px;
          height: 40px;
        }

        .comment-info {
          padding-left: 10px;
          flex: 1;
        }

        .comment-name .nick {
          display: inline-block;
          margin-right: 15px;
          cursor: pointer;
          font-size: 0.975em;
          font-weight: 500;
        }

        .comment-name .sys {
          padding: 3px 5px;
          margin-right: 10px;
          border-radius: 5px;
          color: #242424;
          background-color: rgba(27, 31, 35, 0.05);
        }

        .comment-date {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .comment-date .time {
          font-size: 12px;
          color: #b3b3b3;
        }

        .replay-btn {
          font-size: 14px;
          padding: 2px 6px;
          border-radius: 3px;
          color: #242424;
          background-color: rgba(27, 31, 35, 0.05);
        }

        .comment-content {
          margin: 0 3px;
          padding: 0 10px;
          box-sizing: border-box;
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
          font-size: 14px;
          color: #555;
          line-height: 2;
          word-break: break-all;
        }

        .comment-content p {
          margin-bottom: 0;
          padding: 1em 0;
        }
      `}</style>
    </div>
  )
}
export default Comment
