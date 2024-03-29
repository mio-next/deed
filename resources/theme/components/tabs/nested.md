# Tabs `nested`

A variant of the [Tabs](/?selectedKind=Components/Tabs&selectedStory=Default) component with nested sub-navigation.

<!-- STORY -->

### Usage

```html
<div class="card">
  <div class="e-tabs e-tabs--nested">
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item"><a href="#nested-home" data-toggle="tab" class="active nav-link">Home</a></li>
      <li class="nav-item"><a href="#nested-bookmarks" data-toggle="tab" class="nav-link">Bookmarks</a></li>
      <li class="nav-item"><a href="#nested-messages" data-toggle="tab" class="nav-link">Messages</a></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active" id="nested-home">
        <ul class="nav">
          <li class="nav-item"><a href="" class="nav-link"><span>My Profile</span></a></li>
          <li class="nav-item"><a href="" class="nav-link"><span>Friends</span></a></li>
          <li class="nav-item"><a href="" class="nav-link"><span>News</span></a></li>
        </ul>
      </div>
      <div class="tab-pane" id="nested-bookmarks">
        <ul class="nav">
          <li class="nav-item"><a href="" class="nav-link"><span>Posts</span></a></li>
          <li class="nav-item"><a href="" class="nav-link"><span>People</span></a></li>
          <li class="nav-item"><a href="" class="nav-link"><span>Documents</span></a></li>
        </ul>
      </div>
      <div class="tab-pane" id="nested-messages">
        <ul class="nav">
          <li class="nav-item">
            <a href="" class="nav-link">
              <span>Inbox</span><span class="badge badge-light ml-1">2</span>
            </a>
          </li>
          <li class="nav-item"><a href="" class="nav-link"><span>Sent</span></a></li>
          <li class="nav-item"><a href="" class="nav-link"><span>Drafts</span></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

### See Also
- [Bootstrap - Tabs](http://getbootstrap.com/docs/4.1/components/navs/#tabs)
