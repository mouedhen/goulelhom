<template>
    <form action="/#" enctype="multipart/form-data">
        <h1>New Petition</h1>
        <div class="form-group">
            <input type="text" id="name" class="form-group__control" name="name" placeholder="Your name">
        </div>
        <div class="form-group">
            <input type="text" id="email" class="form-group__control" name="email" placeholder="Your email">
        </div>
        <div class="form-group">
            <input type="text" id="theme" class="form-group__control" name="theme" placeholder="Theme">
        </div>
        <div class="form-group">
            <input type="text" id="title" class="form-group__control" name="title" placeholder="Title">
        </div>
        <div class="form-group">
            <textarea name="description" id="description" rows="2" class="form-group__control"
                      placeholder="Details"></textarea>
        </div>
        <div class="form-group">
            <p class="sworn-statement">
                <small>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, at dolorum eaque eos eveniet
                    exercitationem in laborum magni nisi nobis numquam obcaecati officiis placeat quidem repellendus
                    temporibus, ut vero?<br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, at dolorum eaque eos eveniet
                    exercitationem in laborum magni nisi nobis numquam obcaecati officiis placeat quidem repellendus
                    temporibus, ut vero?<br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, at dolorum eaque eos eveniet
                    exercitationem in laborum magni nisi nobis numquam obcaecati officiis placeat quidem repellendus
                    temporibus, ut vero?<br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, at dolorum eaque eos eveniet
                    exercitationem in laborum magni nisi nobis numquam obcaecati officiis placeat quidem repellendus
                    temporibus, ut vero?<br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, at dolorum eaque eos eveniet
                    exercitationem in laborum magni nisi nobis numquam obcaecati officiis placeat quidem repellendus
                    temporibus, ut vero?<br>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, at dolorum eaque eos eveniet
                    exercitationem in laborum magni nisi nobis numquam obcaecati officiis placeat quidem repellendus
                    temporibus, ut vero?<br>
                </small>
            </p>
            <input id="condition-agree" name="condition-agree" type="checkbox"/>
            <label for="condition-agree">I agree with the sworn statement</label>
        </div>
        <div class="button-group controls">
            <input type="submit" value="Submit" class="button button--primary"/>
            <input type="reset" value="Reset" class="button button--secondary"/>
        </div>
    </form>
</template>

<script>
    export default {
        //
    }
</script>